const vscode = require('vscode');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const snippets = require('./src/snippets');

// Cache for class discovery to improve performance
const classCache = new Map();

function activate(context) {
  console.log('PHP Laravel Snippets extension is now active!');

  // ✨ Snippet Provider
  const provider = vscode.languages.registerCompletionItemProvider(
    'php',
    {
      provideCompletionItems(document, position) {
        return snippets.map(snippet => {
          const item = new vscode.CompletionItem(snippet.label, vscode.CompletionItemKind.Snippet);
          item.insertText = new vscode.SnippetString(snippet.snippet || snippet.label);
          
          // Set detail based on snippet type
          if (snippet.label.includes('::') || snippet.label.includes('Inertia') || 
              snippet.label.includes('Route') || snippet.label.includes('Request')) {
            item.detail = 'Laravel Snippet - phppoint';
          } else if (snippet.label.includes('wp_') || snippet.label.includes('WP_')) {
            item.detail = 'WordPress Snippet - phppoint';
          } else if (snippet.label.includes('symfony_')) {
            item.detail = 'Symfony Snippet - phppoint';
          } else {
            item.detail = 'PHP Snippet - phppoint';
          }
          
          if (snippet.doc) {
            item.documentation = new vscode.MarkdownString(snippet.doc);
            item.documentation.isTrusted = true;
          }
          item.sortText = snippet.label;
          item.preselect = true;
          return item;
        });
      }
    },
    '$', '>', ':', '.', ' ', '(', '{', '[', '"', '\''
  );
  context.subscriptions.push(provider);

  // 🛠 Auto Import Class (Optimized)
  const importCommand = vscode.commands.registerCommand('phpLaravelComplete.importClass', autoImportClass);
  context.subscriptions.push(importCommand);

  // 🔍 Context menu for importing classes
  const importMenu = vscode.commands.registerCommand('phpLaravelComplete.importClassMenu', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active editor!');
      return;
    }

    const document = editor.document;
    const position = editor.selection.active;
    const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z][a-zA-Z0-9_]*/);
    
    if (!wordRange) {
      vscode.window.showErrorMessage('Please select a class name to import!');
      return;
    }

    const className = document.getText(wordRange);
    await autoImportClass(className);
  });

  context.subscriptions.push(importMenu);
}

async function autoImportClass(className = null) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage('No active editor!');
    return;
  }

  const document = editor.document;
  let position = editor.selection.active;
  
  // If className is not provided, get it from the current word
  if (!className) {
    const wordRange = document.getWordRangeAtPosition(position);
    className = document.getText(wordRange);
  }

  if (!className) {
    vscode.window.showErrorMessage('No class name selected!');
    return;
  }

  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    vscode.window.showErrorMessage('No workspace opened!');
    return;
  }

  const rootPath = workspaceFolders[0].uri.fsPath;
  const config = vscode.workspace.getConfiguration('phpLaravelComplete');
  
  const searchPaths = [
    path.join(rootPath, 'app'),
    path.join(rootPath, 'src'),
    ...(config.get('searchVendor') ? [path.join(rootPath, 'vendor')] : []),
    ...(config.get('additionalPaths') || [])
  ];

  // Check cache first
  const cacheKey = `${rootPath}:${className}`;
  if (classCache.has(cacheKey)) {
    const cached = classCache.get(cacheKey);
    if (cached.timestamp > Date.now() - 300000) { // 5 minute cache
      classCandidates = cached.candidates;
    }
  }

  let classCandidates = [];

  if (classCandidates.length === 0) {
    const progressOptions = {
      location: vscode.ProgressLocation.Notification,
      title: `Searching for class "${className}"...`,
      cancellable: false
    };

    await vscode.window.withProgress(progressOptions, async (progress) => {
      progress.report({ increment: 0 });

      for (const searchPath of searchPaths) {
        if (!fs.existsSync(searchPath)) continue;
        
        try {
          const phpFiles = await findPhpFiles(searchPath, className);
          progress.report({ increment: 20, message: `Found ${phpFiles.length} files, scanning...` });
          
          for (const file of phpFiles) {
            const content = await fsPromises.readFile(file, 'utf8');
            const classInfo = parseClassInfo(content, className);
            
            if (classInfo) {
              classCandidates.push({
                fullPath: classInfo.fullPath,
                filePath: file
              });
            }
          }
        } catch (error) {
          console.warn(`Could not search in ${searchPath}: ${error.message}`);
        }
      }
      
      // Cache the results
      classCache.set(cacheKey, {
        candidates: classCandidates,
        timestamp: Date.now()
      });
    });
  }

  if (classCandidates.length === 0) {
    vscode.window.showErrorMessage(`Class "${className}" not found in the project!`);
    return;
  }

  let selectedImport = classCandidates[0].fullPath;

  if (classCandidates.length > 1) {
    const quickPickItems = classCandidates.map(candidate => ({
      label: candidate.fullPath,
      description: path.relative(rootPath, candidate.filePath)
    }));

    const selectedItem = await vscode.window.showQuickPick(quickPickItems, {
      placeHolder: `Multiple classes found for "${className}". Select one to import`
    });

    if (!selectedItem) return; // User cancelled
    selectedImport = selectedItem.label;
  }

  const text = document.getText();
  if (text.includes(`use ${selectedImport};`)) {
    vscode.window.showInformationMessage(`Already imported: ${selectedImport}`);
    return;
  }

  const insertPos = findInsertPosition(document);
  await editor.edit(editBuilder => {
    editBuilder.insert(insertPos, `use ${selectedImport};\n`);
  });

  vscode.window.showInformationMessage(`Imported: ${selectedImport}`);
}

// 🔎 Optimized Helper: Search PHP files with class name in filename
async function findPhpFiles(dir, targetClassName) {
  let results = [];
  const queue = [dir];
  
  while (queue.length > 0) {
    const currentDir = queue.shift();
    try {
      const entries = await fsPromises.readdir(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        
        if (entry.isDirectory()) {
          // Skip vendor and node_modules for better performance unless specifically included
          if (!entry.name.includes('vendor') && !entry.name.includes('node_modules')) {
            queue.push(fullPath);
          }
        } else if (entry.name.endsWith('.php') && entry.name.includes(targetClassName)) {
          results.push(fullPath);
        }
      }
    } catch (error) {
      console.warn(`Cannot read directory: ${currentDir}`);
    }
  }
  
  return results;
}

// 🧠 Parse class information from file content
function parseClassInfo(content, className) {
  // Match classes, traits, and interfaces
  const classRegex = new RegExp(`(?:final\\s+|abstract\\s+)?(?:class|trait|interface)\\s+${className}\\b`);
  if (!classRegex.test(content)) return null;

  const namespaceMatch = content.match(/namespace\s+([^;]+);/);
  const namespace = namespaceMatch ? namespaceMatch[1].trim() : '';
  
  return {
    namespace: namespace,
    fullPath: namespace ? `${namespace}\\${className}` : className
  };
}

// 🧠 Helper: Find place to insert `use` statement
function findInsertPosition(document) {
  const text = document.getText();
  const lines = text.split('\n');
  
  let lastUseLine = -1;
  let namespaceLine = -1;
  let phpOpenTagLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith('<?php') && phpOpenTagLine === -1) {
      phpOpenTagLine = i;
    }
    
    if (line.startsWith('namespace')) {
      namespaceLine = i;
    }
    
    if (line.startsWith('use ')) {
      lastUseLine = i;
    }
  }

  // Insert after last use statement, after namespace, or after PHP open tag
  if (lastUseLine !== -1) {
    return new vscode.Position(lastUseLine + 1, 0);
  }
  
  if (namespaceLine !== -1) {
    return new vscode.Position(namespaceLine + 1, 0);
  }
  
  return new vscode.Position(phpOpenTagLine !== -1 ? phpOpenTagLine + 1 : 0, 0);
}

function deactivate() {
  console.log('PHP Laravel Snippets extension is now deactivated!');
}

module.exports = {
  activate,
  deactivate
};
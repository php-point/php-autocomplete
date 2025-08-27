// src/snippets.js

const snippets = [
    // ==============================================
    // PHP CORE SNIPPETS
    // ==============================================
    
    // Basic Language Constructs
    { label: 'php tag', snippet: '<?php\n$0', doc: 'PHP opening tag - phppoint' },
    { label: 'echo', snippet: 'echo "$1";$0', doc: 'Output a string - phppoint' },
    { label: 'print', snippet: 'print "$1";$0', doc: 'Output a string - phppoint' },
    
    // Control Structures
    { label: 'if', snippet: 'if ($1) {\n\t$0\n}', doc: 'If statement - phppoint' },
    { label: 'else', snippet: 'else {\n\t$0\n}', doc: 'Else block - phppoint' },
    { label: 'elseif', snippet: 'elseif ($1) {\n\t$0\n}', doc: 'Elseif block - phppoint' },
    { label: 'switch', snippet: 'switch ($1) {\n\tcase $2:\n\t\t$0\n\t\tbreak;\n\tdefault:\n\t\tbreak;\n}', doc: 'Switch statement - phppoint' },
    { label: 'case', snippet: 'case $1:\n\t$0\n\tbreak;', doc: 'Case block - phppoint' },
    { label: 'while', snippet: 'while ($1) {\n\t$0\n}', doc: 'While loop - phppoint' },
    { label: 'do while', snippet: 'do {\n\t$0\n} while ($1);', doc: 'Do-while loop - phppoint' },
    { label: 'for', snippet: 'for ($i = 0; $i < $1; $i++) {\n\t$0\n}', doc: 'For loop - phppoint' },
    { label: 'foreach', snippet: 'foreach ($${1:array} as $${2:key} => $${3:value}) {\n\t$0\n}', doc: 'Foreach loop - phppoint' },
    
    // Function & Class Definitions
    { label: 'function', snippet: 'function ${1:name}($2) {\n\t$0\n}', doc: 'Function definition - phppoint' },
    { label: 'class', snippet: 'class ${1:ClassName} {\n\t$0\n}', doc: 'Class definition - phppoint' },
    { label: 'interface', snippet: 'interface ${1:InterfaceName} {\n\t$0\n}', doc: 'Interface definition - phppoint' },
    { label: 'trait', snippet: 'trait ${1:TraitName} {\n\t$0\n}', doc: 'Trait definition - phppoint' },
    
    // Visibility Modifiers
    { label: 'public', snippet: 'public ', doc: 'Public modifier - phppoint' },
    { label: 'protected', snippet: 'protected ', doc: 'Protected modifier - phppoint' },
    { label: 'private', snippet: 'private ', doc: 'Private modifier - phppoint' },
    { label: 'static', snippet: 'static ', doc: 'Static modifier - phppoint' },
    
    // Method Definitions
    { label: 'pf', snippet: 'public function ${1:name}($2) {\n\t$0\n}', doc: 'Public function - phppoint' },
    { label: 'prof', snippet: 'protected function ${1:name}($2) {\n\t$0\n}', doc: 'Protected function - phppoint' },
    { label: 'prif', snippet: 'private function ${1:name}($2) {\n\t$0\n}', doc: 'Private function - phppoint' },
    { label: 'pfi', snippet: 'public function index($1) {\n\t$0\n}', doc: 'Public index function - phppoint' },
    
    // Common Functions
    { label: 'print_r', snippet: 'print_r(${1:variable});', doc: 'Print human-readable information - phppoint' },
    { label: 'var_dump', snippet: 'var_dump(${1:variable});', doc: 'Dump variable information - phppoint' },
    { label: 'isset', snippet: 'isset(${1:variable})', doc: 'Check if variable is set - phppoint' },
    { label: 'empty', snippet: 'empty(${1:variable})', doc: 'Check if variable is empty - phppoint' },
    { label: 'unset', snippet: 'unset(${1:variable});', doc: 'Unset a variable - phppoint' },
    { label: 'exit', snippet: 'exit(${1:status});', doc: 'Exit script execution - phppoint' },
    { label: 'die', snippet: 'die(${1:message});', doc: 'Exit script with message - phppoint' },
    { label: 'return', snippet: 'return ${1:value};', doc: 'Return statement - phppoint' },
    
    // Array Functions
    { label: 'array', snippet: 'array(${1})', doc: 'Create an array - phppoint' },
    { label: 'array_all', snippet: 'array(${1:key} => ${2:value})', doc: 'Create associative array - phppoint' },
    { label: 'array_push', snippet: 'array_push(${1:array}, ${2:value});', doc: 'Push element to array - phppoint' },
    { label: 'array_pop', snippet: 'array_pop(${1:array});', doc: 'Pop element from array - phppoint' },
    
    // Session Handling
    { label: 'session start', snippet: 'session_start();', doc: 'Start session - phppoint' },
    { label: 'session[]', snippet: '$_SESSION["${1:key}"] = ${2:value};', doc: 'Set session variable - phppoint' },
    { label: 'session_get', snippet: '$_SESSION["${1:key}"]', doc: 'Get session variable - phppoint' },
    { label: 'session_destroy', snippet: 'session_destroy();', doc: 'Destroy session - phppoint' },
    
    // File Operations
    { label: 'include', snippet: 'include "${1:file}.php";', doc: 'Include file - phppoint' },
    { label: 'require', snippet: 'require "${1:file}.php";', doc: 'Require file - phppoint' },
    { label: 'include_once', snippet: 'include_once "${1:file}.php";', doc: 'Include file once - phppoint' },
    { label: 'require_once', snippet: 'require_once "${1:file}.php";', doc: 'Require file once - phppoint' },
    { label: 'file_get_contents', snippet: 'file_get_contents("${1:filename}")', doc: 'Read file contents - phppoint' },
    { label: 'file_put_contents', snippet: 'file_put_contents("${1:filename}", ${2:data});', doc: 'Write to file - phppoint' },
    
    // Database Operations
    { label: 'pdo', snippet: 'new PDO("${1:mysql}:host=${2:localhost};dbname=${3:database}", "${4:username}", "${5:password}");', doc: 'PDO connection - phppoint' },
    { label: 'mysqli', snippet: 'new mysqli("${1:localhost}", "${2:username}", "${3:password}", "${4:database}");', doc: 'MySQLi connection - phppoint' },
    
    // ==============================================
    // LARAVEL SPECIFIC SNIPPETS
    // ==============================================
    
    // HTTP Requests
    { label: 'Request', snippet: 'Request $request', doc: 'Type hinted Request object - phppoint' },
    { label: 'rq', snippet: 'request("${1:key}")', doc: 'Get request data - phppoint' },
    { label: 'rq_all', snippet: 'request()->all()', doc: 'Get all request data - phppoint' },
    { label: 'rq_input', snippet: 'request()->input("${1:key}")', doc: 'Get input value - phppoint' },
    
    // Routing
    { label: 'route', snippet: 'route("${1:route.name}")', doc: 'Generate URL for named route - phppoint' },
    { label: 'route_get', snippet: 'Route::get("${1:uri}", "${2:Controller@method}");', doc: 'GET route definition - phppoint' },
    { label: 'route_post', snippet: 'Route::post("${1:uri}", "${2:Controller@method}");', doc: 'POST route definition - phppoint' },
    { label: 'route_put', snippet: 'Route::put("${1:uri}", "${2:Controller@method}");', doc: 'PUT route definition - phppoint' },
    { label: 'route_delete', snippet: 'Route::delete("${1:uri}", "${2:Controller@method}");', doc: 'DELETE route definition - phppoint' },
    { label: 'route_resource', snippet: 'Route::resource("${1:uri}", "${2:Controller}");', doc: 'Resource route definition - phppoint' },
    
    // Responses
    { label: 'view', snippet: 'return view("${1:view.name}", [${2}]);', doc: 'Return view response - phppoint' },
    { label: 'json', snippet: 'return response()->json([${1}]);', doc: 'Return JSON response - phppoint' },
    { label: 'redirect', snippet: 'return redirect("${1:route}");', doc: 'Redirect response - phppoint' },
    { label: 'redirect_route', snippet: 'return redirect()->route("${1:route.name}");', doc: 'Redirect to named route - phppoint' },
    { label: 'redirect_back', snippet: 'return redirect()->back();', doc: 'Redirect back - phppoint' },
    
    // Database & Eloquent
    { label: 'DB::table', snippet: 'DB::table("${1:table}")->${2:get}();', doc: 'Query builder - phppoint' },
    { label: 'Model::all', snippet: '${1:Model}::all();', doc: 'Get all model records - phppoint' },
    { label: 'Model::find', snippet: '${1:Model}::find(${2:id});', doc: 'Find model by ID - phppoint' },
    { label: 'Model::where', snippet: '${1:Model}::where("${2:column}", "${3:value}")->${4:get}();', doc: 'Model where clause - phppoint' },
    { label: 'Model::create', snippet: '${1:Model}::create([${2}]);', doc: 'Create new model record - phppoint' },
    { label: 'Model::update', snippet: '${1:Model}::where("${2:column}", "${3:value}")->update([${4}]);', doc: 'Update model records - phppoint' },
    
    // Authentication
    { label: 'auth', snippet: 'auth()->user()', doc: 'Get authenticated user - phppoint' },
    { label: 'auth_check', snippet: 'auth()->check()', doc: 'Check if user is authenticated - phppoint' },
    { label: 'auth_attempt', snippet: 'auth()->attempt([${1}])', doc: 'Attempt authentication - phppoint' },
    { label: 'auth_login', snippet: 'auth()->login(${1:user})', doc: 'Login user - phppoint' },
    { label: 'auth_logout', snippet: 'auth()->logout()', doc: 'Logout user - phppoint' },
    
    // Validation
    { label: 'validator', snippet: 'validator(${1:data}, [${2:rules}]);', doc: 'Create validator instance - phppoint' },
    { label: 'validate', snippet: 'request()->validate([${1:rules}]);', doc: 'Validate request data - phppoint' },
    
    // Helpers
    { label: 'dd', snippet: 'dd(${1:variable});', doc: 'Dump and die - phppoint' },
    { label: 'dump', snippet: 'dump(${1:variable});', doc: 'Dump variable - phppoint' },
    { label: 'bcrypt', snippet: 'bcrypt("${1:password}")', doc: 'Hash password - phppoint' },
    { label: 'config', snippet: 'config("${1:config.key}")', doc: 'Get config value - phppoint' },
    { label: 'env', snippet: 'env("${1:ENV_KEY}", "${2:default}")', doc: 'Get environment variable - phppoint' },
    { label: 'asset', snippet: 'asset("${1:path}")', doc: 'Generate asset URL - phppoint' },
    { label: 'url', snippet: 'url("${1:path}")', doc: 'Generate URL - phppoint' },
    
    // Inertia.js (if used)
    { label: 'Inertia::render', snippet: 'Inertia::render("${1:Component}", [${2}]);', doc: 'Inertia render method - phppoint' },
    
    // ==============================================
    // SYMFONY SPECIFIC SNIPPETS
    // ==============================================
    
    { label: 'symfony_controller', snippet: 'public function ${1:index}(): Response\n{\n\t$0\n\treturn $this->render("${2:template.html.twig}", [${3}]);\n}', doc: 'Symfony controller method - phppoint' },
    { label: 'symfony_route', snippet: '#[Route("/${1:path}", name: "${2:route_name}")]', doc: 'Symfony route annotation - phppoint' },
    { label: 'doctrine_repo', snippet: '$this->getDoctrine()->getRepository(${1:Entity}::class)', doc: 'Doctrine repository - phppoint' },
    
    // ==============================================
    // WORDPRESS SPECIFIC SNIPPETS
    // ==============================================
    
    { label: 'wp_query', snippet: 'new WP_Query([${1:args}]);', doc: 'WordPress query - phppoint' },
    { label: 'get_header', snippet: 'get_header();', doc: 'WordPress get header - phppoint' },
    { label: 'get_footer', snippet: 'get_footer();', doc: 'WordPress get footer - phppoint' },
    { label: 'wp_enqueue_script', snippet: 'wp_enqueue_script("${1:handle}", "${2:src}");', doc: 'Enqueue script - phppoint' },
    { label: 'wp_enqueue_style', snippet: 'wp_enqueue_style("${1:handle}", "${2:src}");', doc: 'Enqueue style - phppoint' },
    
    // ==============================================
    // TESTING SNIPPETS
    // ==============================================
    
    { label: 'test_method', snippet: 'public function test_${1:method_name}()\n{\n\t$0\n}', doc: 'PHPUnit test method - phppoint' },
    { label: 'assert_true', snippet: '$this->assertTrue(${1:condition});', doc: 'Assert true - phppoint' },
    { label: 'assert_false', snippet: '$this->assertFalse(${1:condition});', doc: 'Assert false - phppoint' },
    { label: 'assert_equals', snippet: '$this->assertEquals(${1:expected}, ${2:actual});', doc: 'Assert equals - phppoint' },
];

// src/snippets.js - Additional PHP Core Snippets

const phpCoreSnippets = [
    // ==============================================
    // PHP CORE - ADDITIONAL SNIPPETS
    // ==============================================
    
    // Error Handling
    { label: 'try catch', snippet: 'try {\n\t$1\n} catch (${2:Exception} $${3:e}) {\n\t$4\n}', doc: 'Try-catch block - phppoint' },
    { label: 'throw', snippet: 'throw new ${1:Exception}("${2:message}");', doc: 'Throw exception - phppoint' },
    { label: 'exception', snippet: 'class ${1:CustomException} extends \\Exception {\n\t$0\n}', doc: 'Custom exception class - phppoint' },
    
    // Magic Methods
    { label: '__construct', snippet: 'public function __construct($1) {\n\t$0\n}', doc: 'Constructor method - phppoint' },
    { label: '__destruct', snippet: 'public function __destruct() {\n\t$0\n}', doc: 'Destructor method - phppoint' },
    { label: '__get', snippet: 'public function __get(${1:property}) {\n\t$0\n}', doc: '__get magic method - phppoint' },
    { label: '__set', snippet: 'public function __set(${1:property}, ${2:value}) {\n\t$0\n}', doc: '__set magic method - phppoint' },
    { label: '__call', snippet: 'public function __call(${1:method}, ${2:args}) {\n\t$0\n}', doc: '__call magic method - phppoint' },
    { label: '__toString', snippet: 'public function __toString() {\n\t$0\n}', doc: '__toString magic method - phppoint' },
    
    // Type Declarations
    { label: 'type string', snippet: 'string $${1:variable}', doc: 'String type declaration - phppoint' },
    { label: 'type int', snippet: 'int $${1:variable}', doc: 'Integer type declaration - phppoint' },
    { label: 'type array', snippet: 'array $${1:variable}', doc: 'Array type declaration - phppoint' },
    { label: 'type bool', snippet: 'bool $${1:variable}', doc: 'Boolean type declaration - phppoint' },
    { label: 'type float', snippet: 'float $${1:variable}', doc: 'Float type declaration - phppoint' },
    { label: 'type mixed', snippet: 'mixed $${1:variable}', doc: 'Mixed type declaration - phppoint' },
    { label: 'nullable type', snippet: '?${1:string} $${2:variable}', doc: 'Nullable type declaration - phppoint' },
    { label: 'return type', snippet: ': ${1:void}', doc: 'Return type declaration - phppoint' },
    
    // Constants
    { label: 'const', snippet: 'const ${1:CONSTANT_NAME} = ${2:value};', doc: 'Class constant - phppoint' },
    { label: 'define', snippet: 'define("${1:CONSTANT_NAME}", ${2:value});', doc: 'Define constant - phppoint' },
    
    // Namespaces
    { label: 'namespace', snippet: 'namespace ${1:Vendor}\\\\${2:Package};', doc: 'Namespace declaration - phppoint' },
    { label: 'use', snippet: 'use ${1:Class};', doc: 'Use statement - phppoint' },
    { label: 'use as', snippet: 'use ${1:Class} as ${2:Alias};', doc: 'Use statement with alias - phppoint' },
    
    // Traits
    { label: 'use trait', snippet: 'use ${1:Trait};', doc: 'Use trait in class - phppoint' },
    
    // Interfaces
    { label: 'implements', snippet: 'implements ${1:Interface}', doc: 'Interface implementation - phppoint' },
    
    // Inheritance
    { label: 'extends', snippet: 'extends ${1:ParentClass}', doc: 'Class extension - phppoint' },
    
    // Abstract Classes
    { label: 'abstract class', snippet: 'abstract class ${1:ClassName} {\n\t$0\n}', doc: 'Abstract class - phppoint' },
    { label: 'abstract method', snippet: 'abstract public function ${1:methodName}($2);', doc: 'Abstract method - phppoint' },
    
    // Static Methods
    { label: 'static method', snippet: 'public static function ${1:methodName}($2) {\n\t$0\n}', doc: 'Static method - phppoint' },
    { label: 'self', snippet: 'self::${1:method}()', doc: 'Self reference - phppoint' },
    { label: 'static', snippet: 'static::${1:method}()', doc: 'Static reference - phppoint' },
    { label: 'parent', snippet: 'parent::${1:method}()', doc: 'Parent reference - phppoint' },
    
    // Anonymous Functions
    { label: 'anonymous function', snippet: 'function (${1:params}) use (${2:variables}) {\n\t$0\n};', doc: 'Anonymous function - phppoint' },
    { label: 'arrow function', snippet: 'fn(${1:params}) => ${2:expression}', doc: 'Arrow function - phppoint' },
    
    // Variable Handling
    { label: 'global', snippet: 'global $${1:variable};', doc: 'Global variable declaration - phppoint' },
    { label: 'static var', snippet: 'static $${1:variable} = ${2:value};', doc: 'Static variable - phppoint' },
    { label: 'list', snippet: 'list(${1:var1}, $${2:var2}) = ${3:array};', doc: 'List assignment - phppoint' },
    { label: 'compact', snippet: 'compact("${1:variable}")', doc: 'Create array from variables - phppoint' },
    { label: 'extract', snippet: 'extract(${1:array});', doc: 'Extract variables from array - phppoint' },
    
    // String Functions
    { label: 'strlen', snippet: 'strlen(${1:string})', doc: 'String length - phppoint' },
    { label: 'substr', snippet: 'substr(${1:string}, ${2:start}, ${3:length})', doc: 'Substring - phppoint' },
    { label: 'strpos', snippet: 'strpos(${1:haystack}, "${2:needle}")', doc: 'String position - phppoint' },
    { label: 'str_replace', snippet: 'str_replace("${1:search}", "${2:replace}", ${3:subject})', doc: 'String replace - phppoint' },
    { label: 'trim', snippet: 'trim(${1:string})', doc: 'Trim string - phppoint' },
    { label: 'explode', snippet: 'explode("${1:delimiter}", ${2:string})', doc: 'Explode string to array - phppoint' },
    { label: 'implode', snippet: 'implode("${1:glue}", ${2:array})', doc: 'Implode array to string - phppoint' },
    { label: 'sprintf', snippet: 'sprintf("${1:format}", ${2:args})', doc: 'Formatted string - phppoint' },
    { label: 'htmlspecialchars', snippet: 'htmlspecialchars(${1:string}, ENT_QUOTES, "UTF-8")', doc: 'Convert special characters to HTML entities - phppoint' },
    
    // Array Functions
    { label: 'count', snippet: 'count(${1:array})', doc: 'Count array elements - phppoint' },
    { label: 'array_key_exists', snippet: 'array_key_exists("${1:key}", ${2:array})', doc: 'Check if array key exists - phppoint' },
    { label: 'in_array', snippet: 'in_array(${1:needle}, ${2:array})', doc: 'Check if value exists in array - phppoint' },
    { label: 'array_merge', snippet: 'array_merge(${1:array1}, ${2:array2})', doc: 'Merge arrays - phppoint' },
    { label: 'array_map', snippet: 'array_map(function(${1:item}) {\n\t$0\n}, ${2:array});', doc: 'Array map - phppoint' },
    { label: 'array_filter', snippet: 'array_filter(${1:array}, function(${2:item}) {\n\t$0\n});', doc: 'Array filter - phppoint' },
    { label: 'array_reduce', snippet: 'array_reduce(${1:array}, function(${2:carry}, ${3:item}) {\n\t$0\n}, ${4:initial});', doc: 'Array reduce - phppoint' },
    { label: 'array_keys', snippet: 'array_keys(${1:array})', doc: 'Get array keys - phppoint' },
    { label: 'array_values', snippet: 'array_values(${1:array})', doc: 'Get array values - phppoint' },
    { label: 'array_column', snippet: 'array_column(${1:array}, "${2:column}")', doc: 'Get array column - phppoint' },
    
    // Date and Time
    { label: 'date', snippet: 'date("${1:Y-m-d H:i:s}")', doc: 'Current date - phppoint' },
    { label: 'time', snippet: 'time()', doc: 'Current timestamp - phppoint' },
    { label: 'strtotime', snippet: 'strtotime("${1:datetime}")', doc: 'String to time - phppoint' },
    { label: 'DateTime', snippet: 'new DateTime("${1:now}")', doc: 'DateTime object - phppoint' },
    { label: 'date_format', snippet: 'date_format(${1:datetime}, "${2:Y-m-d H:i:s}")', doc: 'Format date - phppoint' },
    { label: 'date_diff', snippet: 'date_diff(${1:datetime1}, ${2:datetime2})', doc: 'Date difference - phppoint' },
    
    // File System
    { label: 'file_exists', snippet: 'file_exists("${1:filename}")', doc: 'Check if file exists - phppoint' },
    { label: 'is_file', snippet: 'is_file("${1:filename}")', doc: 'Check if is file - phppoint' },
    { label: 'is_dir', snippet: 'is_dir("${1:dirname}")', doc: 'Check if is directory - phppoint' },
    { label: 'mkdir', snippet: 'mkdir("${1:dirname}", ${2:0755}, true);', doc: 'Create directory - phppoint' },
    { label: 'rmdir', snippet: 'rmdir("${1:dirname}");', doc: 'Remove directory - phppoint' },
    { label: 'unlink', snippet: 'unlink("${1:filename}");', doc: 'Delete file - phppoint' },
    { label: 'copy', snippet: 'copy("${1:source}", "${2:dest}");', doc: 'Copy file - phppoint' },
    { label: 'rename', snippet: 'rename("${1:oldname}", "${2:newname}");', doc: 'Rename file - phppoint' },
    
    // JSON Handling
    { label: 'json_encode', snippet: 'json_encode(${1:data})', doc: 'JSON encode - phppoint' },
    { label: 'json_decode', snippet: 'json_decode(${1:json}, true)', doc: 'JSON decode - phppoint' },
    { label: 'json_last_error', snippet: 'json_last_error()', doc: 'Get last JSON error - phppoint' },
    
    // Regular Expressions
    { label: 'preg_match', snippet: 'preg_match("/${1:pattern}/", ${2:subject}, ${3:matches})', doc: 'Regular expression match - phppoint' },
    { label: 'preg_replace', snippet: 'preg_replace("/${1:pattern}/", "${2:replacement}", ${3:subject})', doc: 'Regular expression replace - phppoint' },
    { label: 'preg_split', snippet: 'preg_split("/${1:pattern}/", ${2:subject})', doc: 'Regular expression split - phppoint' },
    
    // Math Functions
    { label: 'abs', snippet: 'abs(${1:number})', doc: 'Absolute value - phppoint' },
    { label: 'round', snippet: 'round(${1:number}, ${2:precision})', doc: 'Round number - phppoint' },
    { label: 'ceil', snippet: 'ceil(${1:number})', doc: 'Round up - phppoint' },
    { label: 'floor', snippet: 'floor(${1:number})', doc: 'Round down - phppoint' },
    { label: 'rand', snippet: 'rand(${1:min}, ${2:max})', doc: 'Random number - phppoint' },
    { label: 'mt_rand', snippet: 'mt_rand(${1:min}, ${2:max})', doc: 'Better random number - phppoint' },
    { label: 'min', snippet: 'min(${1:array})', doc: 'Minimum value - phppoint' },
    { label: 'max', snippet: 'max(${1:array})', doc: 'Maximum value - phppoint' },
    { label: 'pow', snippet: 'pow(${1:base}, ${2:exponent})', doc: 'Power - phppoint' },
    { label: 'sqrt', snippet: 'sqrt(${1:number})', doc: 'Square root - phppoint' },
    
    // URL Functions
    { label: 'urlencode', snippet: 'urlencode(${1:string})', doc: 'URL encode - phppoint' },
    { label: 'urldecode', snippet: 'urldecode(${1:string})', doc: 'URL decode - phppoint' },
    { label: 'parse_url', snippet: 'parse_url("${1:url}")', doc: 'Parse URL - phppoint' },
    { label: 'http_build_query', snippet: 'http_build_query(${1:array})', doc: 'Build query string - phppoint' },
    
    // Serialization
    { label: 'serialize', snippet: 'serialize(${1:data})', doc: 'Serialize data - phppoint' },
    { label: 'unserialize', snippet: 'unserialize(${1:data})', doc: 'Unserialize data - phppoint' },
    
    // Output Buffering
    { label: 'ob_start', snippet: 'ob_start();', doc: 'Start output buffering - phppoint' },
    { label: 'ob_get_clean', snippet: 'ob_get_clean();', doc: 'Get current buffer contents and delete current output buffer - phppoint' },
    { label: 'ob_get_contents', snippet: 'ob_get_contents();', doc: 'Return the contents of the output buffer - phppoint' },
    
    // PHP Info
    { label: 'phpinfo', snippet: 'phpinfo();', doc: 'Output PHP information - phppoint' },
    { label: 'phpversion', snippet: 'phpversion();', doc: 'Get PHP version - phppoint' },
    
    // Error Reporting
    { label: 'error_reporting', snippet: 'error_reporting(E_ALL);', doc: 'Set error reporting level - phppoint' },
    { label: 'ini_set', snippet: 'ini_set("${1:directive}", "${2:value}");', doc: 'Set configuration option - phppoint' },
    { label: 'ini_get', snippet: 'ini_get("${1:directive}");', doc: 'Get configuration option - phppoint' },
    
    // Superglobals
    { label: '$_GET', snippet: '$_GET["${1:key}"]', doc: 'GET superglobal - phppoint' },
    { label: '$_POST', snippet: '$_POST["${1:key}"]', doc: 'POST superglobal - phppoint' },
    { label: '$_REQUEST', snippet: '$_REQUEST["${1:key}"]', doc: 'REQUEST superglobal - phppoint' },
    { label: '$_SESSION', snippet: '$_SESSION["${1:key}"]', doc: 'SESSION superglobal - phppoint' },
    { label: '$_COOKIE', snippet: '$_COOKIE["${1:key}"]', doc: 'COOKIE superglobal - phppoint' },
    { label: '$_SERVER', snippet: '$_SERVER["${1:key}"]', doc: 'SERVER superglobal - phppoint' },
    { label: '$_FILES', snippet: '$_FILES["${1:key}"]', doc: 'FILES superglobal - phppoint' },
    { label: '$_ENV', snippet: '$_ENV["${1:key}"]', doc: 'ENV superglobal - phppoint' },
    
    // Class Operations
    { label: 'class_exists', snippet: 'class_exists("${1:ClassName}")', doc: 'Check if class exists - phppoint' },
    { label: 'method_exists', snippet: 'method_exists(${1:object}, "${2:method}")', doc: 'Check if method exists - phppoint' },
    { label: 'property_exists', snippet: 'property_exists(${1:object}, "${2:property}")', doc: 'Check if property exists - phppoint' },
    { label: 'get_class', snippet: 'get_class(${1:object})', doc: 'Get class name - phppoint' },
    { label: 'get_parent_class', snippet: 'get_parent_class(${1:object})', doc: 'Get parent class name - phppoint' },
    { label: 'is_a', snippet: 'is_a(${1:object}, "${2:ClassName}")', doc: 'Check if object is of class - phppoint' },
    { label: 'instanceof', snippet: '${1:object} instanceof ${2:ClassName}', doc: 'Instanceof operator - phppoint' },
];

// Combine with existing snippets
const allSnippets = [...snippets, ...phpCoreSnippets];

module.exports = allSnippets;

// module.exports = snippets;
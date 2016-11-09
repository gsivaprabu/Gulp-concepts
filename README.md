#GULP CONCEPTS FOR  JAVASCRIPT  BUILD AUTOMATION

## 1.Introduction

1. Why use a Task runner ?

- Repeating the same process gets old.
- Mainly
	- Minifying
	- Concatenating
- Vendor Prefixes
- Less to CSS Compilation
- Injecting files into HTML Page
- Cache Busting
- Angular Template Caching
- Testing
- Code Analysis


## 2. Automate Task

1. Code Quality
2. Tests
3. Build Pipeline

## 3. Over View of Gulp API's

1. gulp.task

####gulp.task(name,[,dep],fn)

Register a task name with a function. Optionally declare dependencies.

####gulp.src(glob[,options])

Takes a file system glob(set of files)
Emits files that match
Optionally specify options to apply to the glob

####gulp.dest(folder[,options])

Piped files are written to the file system.
Optionally specify options to apply to the output folder
(cwd or mode for permissions)

####gulp.watch(glob[,options],tasks)

Run one or more tasks when a file matched by the glob changes
Array of task names
Callback is passed **event** object with **type** and **path**

## 4. Installation

#### Install Gulp and bower

# npm install -g gulp bower
# npm install -g gulp --save-dev [Install Gulp in local 	project]

	--save-dev save it to devDependencies in package.json
	--save save it to Dependencies in package.json

## 5. JSHINT & JSCS

- JS Code Analyzer
- JS Code Style Checker.
- Define rules in configuration files
	-.jshintrc
	-.jscsrc
- install in dev dependencies
 $ npm install gulp-jshint gulp-jscs --save-dev


##6. CSS Compilation

1. Compiling to CSS and Error Handling
 - Compile CSS
 - Add vendor prefixes
 - watches
 - Gracefully Handling Errors
 - Callbacks

2. CSS Pre-compilers and vendor prefixes
	- Lot of things in pre-compilers
		- stylus
		- less
		- sass
	- Compiling less to css
		- Variable
		- Mixins
		- Nested Rules
		- Imports
		- Operators
		- Functions
- CSS Vendor Prefixes
	- Post CSS
	- Automated
	- Up to date from [caniuse.com](caniuse.com)
	- customizable
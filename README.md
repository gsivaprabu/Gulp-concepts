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
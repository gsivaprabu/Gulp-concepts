**#Gulp Concepts**

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

# 3. Over View of Gulp API's

1. gulp.task

	gulp.task(name,[,dep],fn)

	gulp.src(glob[,options])

	gulp.dest(folder[,options])

	gulp.watch(glob[,options],tasks)


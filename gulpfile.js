var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var $ = require('gulp-load-plugins')({ lazy: true });
var port = process.env.port || config.defaultPort;
gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', { verbose: true }))
        .pipe($.jshint.reporter('fail'));
});
gulp.task('styles', function() {
    log('Compiling Less --> CSS');
    return gulp
        .src(config.less)
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({ browsers: ['last 2 version', '> 5%'] }))
        .pipe(gulp.dest(config.temp));
});
gulp.task('clean-styles', function(done) {
    var files = config.temp + '**/*.css';
    clean(files, done);
});
gulp.task('less-watcher', function() {
    gulp.watch([config.less], ['styles']);
});
gulp.task('wiredep', function() {
    log('Wire up the bower css js and our app js into the html');
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});
gulp.task('inject', ['wiredep', 'styles'], function() {
    log('Wire up the app css into the html, and call wiredep ');
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.client));
});
gulp.task('serve-dev', ['inject'], function() {
    var isDev = true;
    var nodeOptions = {
        script: config.nodeServer, //TO DO app.js
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server] //TODO define the files to restart on
    };
    $.nodemon(nodeOptions)
        .on('restart',['vet'], function(ev) {
            log('************ Nodemon  restarted **************');
            log('Files changed on restart ;\n' + ev);
        })
    .on('start', function() {
        log('Nodemon  started');
    })
    .on('crash', function() {
        log('Nodemon crashed (script crashed for some reason)');
    })
    .on('exit', function() {
        log('Nodemon exited cleanly');
    });
});
////////////
function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, done);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

/* global require */

var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var webpack = require('webpack-stream');
var config = require('./gulp.config.js')();
var hash_src = require("gulp-hash-src");

var GLP = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'browser-sync', 'run-sequence'],
    replaceString: /\bgulp[\-.]/
});

var gulpsync = require('gulp-sync')(gulp);


var reload = GLP.browserSync.reload;

gulp.task('copy', function(cb) {
    del.sync([
        config.lib + '/**/*',
        config.dest + '/index.html'
    ], cb);

    gulp.src(config.src + '/index.html')
        .pipe(gulp.dest(config.dest));

    return gulp.src(config.libSources)
        .pipe(gulp.dest(config.lib));
});

gulp.task('inject', function(cb) {
    return gulp.src(config.dest + '/index.html')
        .pipe(GLP.inject(
                gulp.src(config.injectFiles,
                    {read: false}
                ),
                {name: 'inject', relative: true})
        )
        .pipe(gulp.dest(config.dest))
        // hashing
        .pipe(hash_src({build_dir: config.dest, src_path: config.src}))
        .pipe(gulp.dest(config.dest));
});

gulp.task('tslint', function() {
    return gulp.src(config.src + '/**/*.tsx')
        .pipe(GLP.tslint())
        .pipe(GLP.tslint.report('recommended', {
            emitError: true
        }));
});

gulp.task('scripts', function(cb) {
    del.sync([
        config.scripts + '/**/*'
    ], cb);

    return gulp.src(config.scriptSource)
        .pipe(GLP.typescript({
            jsx: "react",
            module: "commonjs",
            noImplicitAny: false,
            preserveConstEnums: true,
            target: "es5"
        }))
        .pipe(gulp.dest(config.scripts))
        .pipe(webpack({
            output: {
                filename: 'app.js'
            },
            loaders: [
                {
                    test: /\.jsGLP/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react']
                    }
                }
            ]
        }))
        .pipe(gulp.dest(config.scripts))
        .pipe(GLP.sourcemaps.init())
        .pipe(GLP.rename('app.min.js'))
        .pipe(GLP.uglify())
        .pipe(GLP.sourcemaps.write('.'))
        .pipe(gulp.dest(config.scripts));
});

gulp.task('sass', function(cb) {
    del.sync([
        config.style + '/**/*'
    ], cb);

    return gulp.src(config.src + '/styles/shapes.scss')
        .pipe(GLP.sourcemaps.init())
        .pipe(GLP.sass({
                outputStyle: 'compressed'
            })
            .on('error', GLP.sass.logError))
        .pipe(GLP.autoprefixer())
        .pipe(GLP.rename('app.min.css'))
        .pipe(GLP.sourcemaps.write('.'))
        .pipe(gulp.dest(config.style));
});

gulp.task('release', function(cb) {
    del.sync([
        config.scripts + '/*.map'
    ], cb);

    return gulp.src(config.scripts + '/*.js')
        .pipe(GLP.stripDebug())
        .pipe(gulp.dest(config.scripts));
});

gulp.task('watch', function() {
    if(fs.existsSync(config.dest + '/index.html')) {
        gulp.watch(config.src + '/**/*.tsx', ['tslint', 'scripts']);
        gulp.watch(config.scripts + '/*.js').on('change', reload);
        gulp.watch(config.src + '/**/*.scss', ['sass']).on('change', reload);
        gulp.watch(config.src + '/**/*.html', ['inject']).on('change', reload);
    }
});

gulp.task('server-connect', function() {
    if(fs.existsSync(config.dest + '/index.html')) {
        GLP.browserSync({
            server: {
                baseDir: config.dest
            },
            online: false
        });
    }
});

gulp.task('production', function() {
    if(fs.existsSync(config.dest + '/index.html')) {
        GLP.browserSync({
            ui: false,
            server: {
                baseDir: config.dest
            },
            online: false,
            ghostMode: false,
            logLevel: "silent",
            open: false
        });
    }
});

gulp.task('build', function() {
    return gulpsync.sync('tslint', 'scripts', 'sass', 'copy', 'inject')
    //GLP.runSequence(
    //
    //)
});

gulp.task('develop', gulpsync.sync(['build', 'watch', 'server-connect']));
gulp.task('default', ['develop']);
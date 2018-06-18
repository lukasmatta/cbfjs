var gulp = require("gulp"),
    closureCompiler = require('gulp-closure-compiler');

gulp.task('compress', function() {
    return gulp.src("src/**/*.js")
        .pipe(closureCompiler({
            fileName: 'cbf.min.js',
            compilerFlags: {compilation_level: 'SIMPLE_OPTIMIZATIONS'}
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", ["compress"], function() {});
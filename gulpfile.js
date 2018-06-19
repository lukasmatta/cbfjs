var gulp = require("gulp"),
    closureCompiler = require('gulp-closure-compiler');

gulp.task('compress', function() {
    return gulp.src("src/**/*.js")
        .pipe(closureCompiler({
            fileName: 'cbf.min.js',
            continueWithWarnings: true,
            compilerFlags: {compilation_level: 'SIMPLE_OPTIMIZATIONS'}
        }))
        .pipe(gulp.dest('dist'))
        .on('error', console.error.bind(console));
});

gulp.task("default", ["compress"], function() {});
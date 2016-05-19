var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    // do nothing
});

gulp.task('build-sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});
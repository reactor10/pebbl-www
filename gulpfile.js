'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('./static/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css'));
});



gulp.task('watch', function() {
    gulp.watch('./static/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);

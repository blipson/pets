'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./petsApp/bower/materialize/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./petsApp/css'));
});

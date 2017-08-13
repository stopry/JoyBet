var path = require('path');

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var sassPath = './src/assets/sass';
var cssPath = './src/assets/css';

gulp.task('joybetsass',function(){
  gulp.src(sassPath+'/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(cssPath))
});

gulp.watch([sassPath+'/*.scss'],function(){
  gulp.run('joybetsass');
});

gulp.task('default',function(){
  gulp.run('joybetsass');
})


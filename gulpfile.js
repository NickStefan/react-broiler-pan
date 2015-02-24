var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('browserify', function(){

  /* example init */
  gulp.src('src/js/example-init.js')
  .pipe(browserify({debug: true}))
  .pipe(concat('example-init.js'))
  .pipe(gulp.dest('dist/js'));

  /* example for require */
  gulp.src('src/js/example.js')
  .pipe(browserify({debug: false}))
  .pipe(concat('example.js'))
  .pipe(gulp.dest('dist/js'));

});

gulp.task('copyHTML', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('copyJSandCSS', function(){
  gulp.src('src/css/*')
  .pipe(gulp.dest('dist/css'));

  gulp.src('dist/js/example.js')
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('dev',['browserify','copyJSandCSS','copyHTML']);

gulp.task('watch', function(){
  gulp.watch('src/**/*.*', ['dev']);
});



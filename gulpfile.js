var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./build'));
});

gulp.task('uglify-js', ['js'], function() {
    return gulp.src('./build/*.js')
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('./build'))
});

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./build'));
});

gulp.task('clean-css', ['sass'], function() {
    return gulp.src('./build/*.css')
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.sass', ['sass', 'clean-css']);
    gulp.watch('./src/js/*.js', ['js', 'uglify-js']);
});

gulp.task('default', ['sass', 'clean-css', 'js', 'uglify-js']);

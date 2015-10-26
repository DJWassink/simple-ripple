var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return sass('./src/sass/*.sass')
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist'));

});

gulp.task('watch', function () {
    gulp.watch('./src/sass/*.sass', ['sass']);
    gulp.watch('./src/js/*.js', ['sass']);
});

gulp.task('default', ['sass', 'js']);

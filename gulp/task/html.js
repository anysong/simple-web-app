const gulp = require('gulp');

gulp.task('html', () => {
    gulp.src('./src/views/*.html')
        .pipe(gulp.dest('./dist/views'))
})
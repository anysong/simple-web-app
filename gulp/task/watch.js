const gulp = require('gulp');
const watch = require('gulp-watch');
const sequence = require('gulp-sequence');

gulp.task('watch-js', () => {
    watch('./src/components/detail/*.js', () => {
        gulp.start('babel-detail');
    })
})
gulp.task('watch-css', () => {
    watch('./src/components/detail/*.less', () => {
        gulp.start('less-detail');
    })
})
gulp.task('watch-html', () => {
    watch('./src/views/*.html', () => {
        gulp.start('html');
    })
})

gulp.task('watch', () => {
    sequence('clean', ['less', 'babel', 'html', 'img'], ['watch-js', 'watch-css', 'watch-html'], () => {})
})
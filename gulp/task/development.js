const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('start', ()=>{
    sequence(['watch','browser-sync'], ()=>{});
})
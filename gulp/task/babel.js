const gulp = require('gulp');
const babel = require('gulp-babel');
const notify = require("gulp-notify");

var list = ['detail'];
var taskList = list.map((i)=> 'babel-' + i);

list.map((item) => {
    gulp.task('babel-' + item, () => {
        gulp.src('./src/components/' + item + '/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .on("error", notify.onError("Error: <%= error.message %>"))
            .pipe(gulp.dest('./dist/components/' + item))
    })
})


gulp.task('babel', taskList, ()=> {

});
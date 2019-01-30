const gulp = require('gulp');

var list = ['detail'];
var taskList = list.map((i)=> 'img-' + i);

list.map((item) => {
    gulp.task('img-' + item, () => {
        gulp.src('./src/components/' + item + '/i/**')
            .pipe(gulp.dest('./dist/components/' + item + '/i/'))
    })
})


gulp.task('img', taskList, ()=> {

});
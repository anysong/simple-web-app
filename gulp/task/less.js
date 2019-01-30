const gulp = require('gulp');
const less = require('gulp-less');
const notify = require("gulp-notify");
const autoPreFixer = require('gulp-autoprefixer');

var list = ['detail'];
var taskList = list.map((i)=> 'less-' + i);

list.map((item) => {
    gulp.task('less-' + item, () => {
        gulp.src('./src/components/' + item + '/*.less')
            .pipe(less())
            .on("error", notify.onError("Error: <%= error.message %>"))
            .pipe(autoPreFixer({
                browsers: ["last 2 versions"], //主流浏览器的2个版本
                cascade: true //是否美化属性值
            }))
            .pipe(gulp.dest('./dist/components/' + item))
    })
})
gulp.task('less', taskList, () => {

})
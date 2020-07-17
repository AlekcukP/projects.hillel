// function task (cb){
//     console.log('Hello');
//     cb();
// }

// module.exports.default = task;

const concat = require('gulp-concat');
const gulp = require('gulp');

function copyHtml(cb){
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
    cb();
}

function copyJs(cb){
    gulp.src('./src/Js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));

    cb();
}

module.exports.build = gulp.series(copyHtml, copyJs);
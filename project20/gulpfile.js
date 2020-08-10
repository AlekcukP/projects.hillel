const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');


function copyCss (){
    return gulp.src('./src/css/style.css').pipe(csso()).pipe(gulp.dest('./dist'))
}

function copyHtml(){
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist'));
}

function copyJs(){
    return gulp.src('./src/js/*/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./dist'))
}

function copyVendors(){
    return gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(rename('vendor.js')).pipe(gulp.dest('./dist'))
}

module.exports.build = gulp.parallel(copyHtml, copyCss, copyVendors, copyJs);
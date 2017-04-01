"use strict";

var gulp = require("gulp") ;
var babel = require("gulp-babel") ;
var clean = require("gulp-clean") ;
var uglify = require('gulp-uglify') ;
var strip = require("gulp-strip-comments") ;
var streamify = require("gulp-streamify") ;
var gulpSequence = require("gulp-sequence") ;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
定义build的输入和输出路径
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
var compilePath = {
    src : { js : "src/**/*.js" } ,
    dist : { js : "dist/"}
 } ;
 /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
定义清空编译目录dist任务
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
gulp.task("clean", function() {
    return gulp.src([
            "dist"
        ], {
            read : false
        })
        .pipe(clean()) ;
}) ;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
定义对js进行es6转es5的任务
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
gulp.task("es6-es5" , function () {  
    gulp.src(compilePath.src.js)          
        .pipe(strip())  //去除注释
        .pipe(streamify(babel()))       
        .pipe(uglify())
        .pipe(gulp.dest(compilePath.dist.js)) ;
}) ; 
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
执行gulp任务
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
gulp.task('build', gulpSequence('clean', 'es6-es5')) ;

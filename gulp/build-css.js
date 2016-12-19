'use strict';

var gulp = require('gulp'),
	config = require('../gulpfile.config'),
	$ = require('gulp-load-plugins')({ lazy: true });

exports.task = function() {

	gulp.src([config.paths.assets]).pipe(gulp.dest('client/dist'));

	return gulp.src('client/scss/main.scss')
		.pipe($.plumber())
		.pipe($.concat('main.scss'))
		.pipe($.sass())
		.pipe($.rename('style.css'))
		.pipe(gulp.dest('client/dist/'))
		.pipe($.livereload());

};

'use strict'

const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const historyApiFallback = require('connect-history-api-fallback');

gulp.task('styles', () => {
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
	browserify('dev/scripts/main.js', {debug: true})
		.transform('babelify', {
			sourceMaps: true,
			presets: ['env','react']
		})
		.bundle()
		.pipe(source('main.js'))
		.pipe(buffer())
		.pipe(gulp.dest('public/scripts'))
		.pipe(reload({stream:true}));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: './'
		},
	middleware: [historyApiFallback()]
	});
});

gulp.task('watch', () => {
	gulp.watch('./dev/styles/**/*.scss', ['styles']);
	gulp.watch('./dev/scripts/*.js', ['scripts']);
	gulp.watch('*.html', reload);
})

gulp.task('default', ['browser-sync', 'styles', 'scripts', 'watch']);
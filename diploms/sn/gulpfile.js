var gulp			= require('gulp'),
	less			= require('gulp-less'),
	browserSync		= require('browser-sync').create(),
	autoprefixer	= require('gulp-autoprefixer'),
	notify			= require("gulp-notify"),
	uglify			= require("gulp-uglify"),
	combiner		= require('stream-combiner2'),
	notifier		= require('node-notifier'),
	nano            = require('gulp-cssnano');

gulp.task('serve', function() {
	browserSync.init({
		server: "./",
		ui: {
			port: 3100
		}
	});
});

gulp.task('watch', function() {
	gulp.watch("src/css/*.*", ['less']);
	gulp.watch("src/js/*.js", ['js']);
	gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
	var combined = combiner.obj([
		gulp.src("src/css/stylesheet.less"),
		less(),
		autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}),
        nano({autoprefixer: false}),
		gulp.dest("app/css"),
		browserSync.stream()
	]);

	combined.on('error', function(e) {

		notifier.notify({
			'title': 'Less ERROR',
			'message': 'Line: ' + e.line + '\n File: ' + e.filename,
			'sound': true,
		});
	});

	return combined;
});

gulp.task('js', function() {
    var combined = combiner.obj([
        gulp.src("src/js/*.js"),
        uglify(),
        gulp.dest("app/js/"),
        browserSync.stream()
    ]);

    combined.on('error', function(e) {

        notifier.notify({
            'title': 'Less ERROR',
            'message': 'Line: ' + e.line + '\n File: ' + e.filename,
            'sound': true,
        });
    });

    return combined;
});

gulp.task('prod_less', function() {
	var combined = combiner.obj([
		gulp.src("src/css/stylesheet.less"),
		less(),
		autoprefixer({
			browsers: ['last 15 versions'],
			cascade: false
		}),
		nano({autoprefixer: false}),
		gulp.dest("app/css"),
		browserSync.stream()
	]);

	combined.on('error', function(e) {

		notifier.notify({
			'title': 'Less ERROR',
			'message': 'Line: ' + e.line + '\n File: ' + e.filename,
			'sound': true,
		});
	});

	return combined;
});

gulp.task('prod_js', function() {
	var combined = combiner.obj([
		gulp.src("src/js/*.js"),
		uglify(),
		gulp.dest("app/js"),
		browserSync.stream()
	]);

	combined.on('error', function(e) {

		notifier.notify({
			'title': 'Less ERROR',
			'message': 'Line: ' + e.line + '\n File: ' + e.filename,
			'sound': true,
		});
	});

	return combined;
});

gulp.task('default', ['serve', 'watch', 'less', 'js']);

gulp.task('prod', ['prod_less', 'prod_js']);
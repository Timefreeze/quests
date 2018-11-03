var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var gutil = require( 'gulp-util' );


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('server', ['sass'], function() {

    bs.init({server: "."});
    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS 
gulp.task('sass', function() {
 return gulp.src("sass/*.sass")
   .pipe(sass())
   .pipe(gulp.dest("css"))
   .pipe(bs.stream());
});

gulp.task('default', ['server']);

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     '88.99.94.73',
		user:     'atran478',
		password: 'tGkT52shrE',
		log:      gutil.log
	} );

} );
/* global require */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const fileInject = require('gulp-inject');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const pump = require('pump');


/* Alle verwendeten JS Files, damit das eine JS File zusammengesetzt werden kann. */
const allFrontAppJsFiles = [
	'./src/assets/js/app.js',
	'./src/assets/js/ready.js'
];


/**
 * sass task, will compile the .SCSS files,
 * and handle the error through plumber and notify through system message.
 */
 function compileScss(){
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/assets/css'))
		.pipe(browserSync.stream());
}


/**
 * Setzt die html-Templates auf jeder Seite ein
 * Hört auf Änderungen in html Files im Ordner templates
 */
 function injectHeaderAndFooter(){
	return gulp.src('./src/*.html')
		.pipe(fileInject(gulp.src(['./src/templates/head.html']), {
			starttag: '<!-- inject:htmlHead -->',
			transform(filepath, file) {
				return file.contents.toString();
			}
		}))

		.pipe(fileInject(gulp.src(['./src/templates/header.html']), {
			starttag: '<!-- inject:htmlHeader -->',
			transform(filepath, file) {
				return file.contents.toString();
			}
		}))

		.pipe(fileInject(gulp.src(['./src/templates/navigation.html']), {
			starttag: '<!-- inject:htmlNavigation -->',
			transform(filepath, file) {
				return file.contents.toString();
			}
		}))

		.pipe(fileInject(gulp.src(['./src/templates/footer.html']), {
			starttag: '<!-- inject:htmlFooter -->',
			transform(filepath, file) {
				return file.contents.toString();
			}
		}))
		.pipe(gulp.dest('src/'));
}


/**
 * Fügt alle .js Files aus dem Array allFrontAppJsFiles in einem File frontApp.js zusammen.
 * Und verkleinert die .js Files.
 * - Babel (ES6 zu ES5) braucht es, weil sonst der minifyer nicht geht, der versteht nur ES5.
 * - pump ist eine Alternative zu pipe, dank pump gibt's schlaue Fehlermeldungen.
 */
 function minifyFrontJs(cb){
	pump([
		gulp.src(allFrontAppJsFiles),
		sourcemaps.init(),
		concat('frontApp.js'),
	 	babel({
			compact: false, // unterdrückt die Warnung 'The code generator has deoptimised the styling ... as it exceeds the max of'
			presets: 
			[
				[
					'@babel/env', 
					{debug: true}
				]
			]
		}),
		uglify(),
		rename('frontApp.min.js'),
		sourcemaps.write('./'),
		gulp.dest('src/assets/scripts')
	], cb);
}


/**
 * The run task, will launch browserSync and launch index.html files,
 * and watch the changes for html, sass and js files
 * and watching if a file in the template folder is changing and then insert the changes in all html files in app
 */
 function run(done){
	// auf dem Port 8888 läuft das Backend
	browserSync.init({
		proxy: 'http://localhost:8888',
		open: false
	});

	//watch for changes in sass files
	gulp.watch('./src/scss/**/*.scss', gulp.series(compileScss));

	//watch for changes in html files
	gulp.watch(['./src/*.html'])
		.on('change', browserSync.reload);

	//watch for changes in html templates
	gulp.watch('./src/templates/*.html', gulp.series(injectHeaderAndFooter))

	// Wartet auf Änderungen in einer .js Datei im Frontend Bereich
	gulp.watch(['./src/assets/js/**/*.js'], gulp.series(minifyFrontJs))
		.on('change', browserSync.reload);

	done();
}


/**
 * Mit 'gulp' wird der Default Task gestartet, der in diesem
 * Fall unter anderm den 'run' Task startet.
 */
exports.default = gulp.series(gulp.parallel(compileScss,
											minifyFrontJs,
											injectHeaderAndFooter),
								run);
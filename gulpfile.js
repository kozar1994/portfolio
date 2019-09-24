//const { src, dest, parallel } = require('gulp');
const gulp = require('gulp');
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const reamene = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");

function styleScss (done) {
  gulp.src("./sass/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass(
      {
        errLogToConsole: true,
        outputStyle: "compressed"
      }
    ).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(reamene({suffix: ".min"}))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css"));
  done();
}

function watch () {
  gulp.watch("./sass/**/*", styleScss);
}

gulp.task("default", gulp.series(watch));


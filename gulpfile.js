const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const htmlMinifier = require('gulp-htmlmin');


const pkg = require('./package.json');

// CSS build task
function buildCss() {
  return gulp.src('app/*.css')
    .pipe(postcss([cssnext()]))
    .pipe(gulp.dest('dist'));
}

// JS build task
function buildJs() {
  return gulp.src('app/*.js')
    .pipe(replace('{%VERSION%}', pkg.version))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist'));
}

// HTML build task
function buildHtml() {
  return gulp.src('app/*.html')
    .pipe(htmlMinifier({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
}

// Copy assets
function copyAssets() {
  return gulp.src(['app/images/**/*', 'app/manifest.json'], { base: 'app' })
    .pipe(gulp.dest('dist'));
}

exports.buildCss = buildCss;
exports.buildJs = buildJs;
exports.buildHtml = buildHtml;
exports.copyAssets = copyAssets;
exports.default = gulp.parallel(buildCss, buildJs, buildHtml, copyAssets);

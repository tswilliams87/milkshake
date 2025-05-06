const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const htmlmin = require('gulp-htmlmin');

const pkg = require('./package.json');

// CSS build task
function buildCss() {
  return gulp.src('app/*.css')
    .pipe(postcss([cssnext]))
    .pipe(gulp.dest('dist'));
}

// JS build task (includes ALL JS, including auth.js, signup.js, etc.)
function buildJs() {
  return gulp.src('app/*.js')
    .pipe(replace('{%VERSION%}', pkg.version))
    .pipe(babel({
      presets: ['babili']
    }))
    .pipe(gulp.dest('dist'));
}

// HTML build task (minify all HTML pages)
function buildHtml() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
}

// Asset copy (e.g., images and manifest)
function copyAssets() {
  return gulp.src(['app/images/**/*', 'app/manifest.json'], { base: 'app' })
    .pipe(gulp.dest('dist'));
}

// Default task
exports.default = gulp.parallel(buildCss, buildJs, buildHtml, copyAssets);

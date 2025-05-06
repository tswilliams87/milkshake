const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const htmlmin = require('gulp-htmlmin');

const pkg = require('./package.json');

// CSS build task (preserve app/ path)
function buildCss() {
  return gulp.src('app/*.css', { base: 'app' })
    .pipe(postcss([cssnext]))
    .pipe(gulp.dest('dist'));
}

// JS build task (preserve app/ path)
function buildJs() {
  return gulp.src('app/*.js', { base: 'app' })
    .pipe(replace('{%VERSION%}', pkg.version))
    .pipe(babel({
      presets: ['babili']
    }))
    .pipe(gulp.dest('dist'));
}

// HTML build task (preserve app/ path)
function buildHtml() {
  return gulp.src('app/*.html', { base: 'app' })
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
}

// Asset copy (images + manifest, preserve structure)
function copyAssets() {
  return gulp.src(['app/images/**/*', 'app/manifest.json'], { base: 'app' })
    .pipe(gulp.dest('dist'));
}

// Default task
exports.default = gulp.parallel(buildCss, buildJs, buildHtml, copyAssets);

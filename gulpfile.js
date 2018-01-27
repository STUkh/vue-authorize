var gulp = require('gulp'),
    connect = require('gulp-connect')
    webpack = require('webpack'),
    gulpWebpack = require('gulp-webpack')
    history = require('connect-history-api-fallback')

gulp.task('compile', function () {
  var webpackConfig = require('./webpack.config.js')
  return gulp.src('./src/index.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest('./dist'))
})

gulp.task('server', function () {
  connect.server({
    name: 'VueAuthorize',
    root: './example',
    base: 'example',
    port: 8080,
    livereload: true,
    verbose: true,
    middleware: function () {
      return [history()]
    }
  });
})

gulp.task('watch', function () {
  gulp.watch([
    './example/index.js',
    './example/acl-config.js',
    './src/**/*.js',
  ], ['compile'])
})

gulp.task('dev', ['compile', 'server', 'watch'])
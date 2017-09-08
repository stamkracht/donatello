module.exports = function(gulp) {

  'use strict';


  return {
    // packages.
    browserify     : require('browserify'),
    babelify       : require("babelify"),
    buffer         : require('vinyl-buffer'),
    vss            : require('vinyl-source-stream'),
    cssnext        : require('postcss-cssnext'),
    browsersync    : require('browser-sync'),
    del            : require('del'),
    modernizr      : require('modernizr'),
    imagemin       : require('imagemin'),
    mozjpeg        : require('imagemin-mozjpeg'),
    pngquant       : require('imagemin-pngquant'),
    plugins        : require('gulp-load-plugins')({
      rename: {
        'gulp-rev-append': 'rev'
      }
    }),

    // source directories.
    source: {
      tmp: 'tmp/',
      dest: 'dest/'
    }
  };


};

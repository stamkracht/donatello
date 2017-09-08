module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();
  var dirs = [
    config.source.tmp,
    config.source.dest
  ];

  gulp.task('clean', function () {

    return config.del.sync(dirs);

  });


};

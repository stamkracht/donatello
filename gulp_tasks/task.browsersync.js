module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('browsersync', function(){

    config.browsersync({
      proxy: 'http://localhost:8000',
      files: [
        'dest/main.css',
        'dest/main.js',
      ],
      logPrefix: 'Donatello',
      logConnections: true,
    });

  });


};

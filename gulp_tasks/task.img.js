module.exports = function (gulp) {

  'use strict';


  var config = require('./config')();

  gulp.task('img', function () {

    return config.imagemin(['src/img/**/*.{jpg,png,svg}'], config.source.dest, {
      plugins: [
        config.mozjpeg(),
        config.pngquant({ quality: '65-80' })
      ]
    })
      .then(files => {
        for (var i = 0; i < files.length; i++) { console.log(files[i].path); }
      });

  });


};

/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  if(!process.env.EMBER_CLI_FASTBOOT){
    app.import('vendor/theme/pace-master/pace.js');

    app.import('vendor/theme/bootstrap/js/bootstrap.js');

    app.import('vendor/theme/waves/waves.js');
  }

  app.import('vendor/theme/pace-master/pace-theme-flash.css');
  app.import('vendor/theme/bootstrap/css/bootstrap.css');

  app.import('vendor/theme/modern/modern.css');
  app.import('vendor/theme/modern/white.css');

  ['ttf', 'woff', 'woff2'].forEach((ext) => {
    app.import('vendor/theme/bootstrap/fonts/glyphicons-halflings-regular.' + ext , {
      destDir: 'fonts'
    });
  });

  app.import('vendor/theme/waves/waves.css');

  app.import('vendor/theme/fontawesome/css/font-awesome.css');
  ['eot', 'svg', 'ttf', 'woff', 'woff2'].forEach((ext) => {
    app.import('vendor/theme/fontawesome/fonts/fontawesome-webfont.' + ext, {
      destDir: 'fonts'
    });
  });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

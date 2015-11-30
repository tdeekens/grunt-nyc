/*
* grunt-nyc
* https://github.com/tdeekens/grunt-nyc
*
* Copyright (c) 2015 tdeekens
* Licensed under the MIT license.
*/

module.exports = function(grunt) {
  grunt.registerMultiTask('nyc', 'nyc code coverage tool', function() {
    process.env.NYC_CWD = process.cwd();

    var
      NYC = require('nyc'),
      options = this.options({
        tempDirectory: './.nyc_output',
        reporter: 'text',
        require: [],
        cwd: process.cwd()
      }),
      nyc = new NYC(options);
      
      nyc.cleanup();
      nyc.wrap();
      nyc.writeCoverageFile();
      nyc.report();
  });
};

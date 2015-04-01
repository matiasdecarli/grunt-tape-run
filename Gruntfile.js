/*
 * grunt-tape-run
 * https://github.com/matiasdecarli/grunt-tape-run
 *
 * Copyright (c) 2015 Matias
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      'tape_run': {
          main: {
                target: './test/tape_run_test.js'
            }
          }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['tape_run']);
};

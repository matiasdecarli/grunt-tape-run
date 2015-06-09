/*
 * grunt-tape-run
 * https://github.com/matiasdecarli/grunt-tape-run
 *
 * Copyright (c) 2015 Matias
 * Licensed under the MIT license.
 */

'use strict';

var run = require('tape-run');
var browserify = require('browserify');

module.exports = function(grunt) {
    grunt.registerMultiTask('tape_run', 'a grunt task to run tape-run', function() {
        var done = this.async();

        browserify(this.data.target)
            .bundle()
            .pipe(run())
            .on('results', function(results) {
                if (results.fail.length > 0) {
                    grunt.fail.fatal(results.fail.length + ' test(s) have failed')
                }
                done();
            })
            .pipe(process.stdout);
    });
};

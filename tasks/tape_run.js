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
			.on('results', function() {
				console.log;
				done();
			})
			.pipe(process.stdout);
	});
};

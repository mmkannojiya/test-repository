'use strict';

// # Config/Tasks
// Added test comments to test jenkins plungin
// All Grunt tasks are now stored in /grunt.
// registerTask has been replaced by /grunt/aliases.js
//
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	  karma: {
	  unit: {
		configFile: 'karma.conf.js'
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-karma');
};

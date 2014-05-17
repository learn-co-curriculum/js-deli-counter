"use strict";
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      options: {
        globalstrict: true,
        globals: {
          _: false,
         _V_: false,
         afterEach: false,
         beforeEach: false,
         confirm: false,
         context: false,
         describe: false,
         expect: false,
         it: false,
         jasmine: false,
         JSHINT: false,
         mostRecentAjaxRequest: false,
         qq: false,
         runs: false,
         spyOn: false,
         spyOnEvent: false,
         waitsFor: false,
         xdescribe: false,
         console: false,
         module: false,
         require: false
       }
     },
     all: ['Gruntfile.js', 'lib/**/*.js', 'spec/**/*.spec.js']
   },
    watch: {
      js: {
        files: ['lib/**/*.js', 'spec/**/*.spec.js'],
        tasks: ['test']
      }
    },
    shell: {
      test: {
        options: { stdout: true },
        command: './node_modules/jasmine-node/bin/jasmine-node --captureExceptions --forceexit spec'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'shell:test']);
};

// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = function(grunt) {
    grunt.initConfig({
      watch: {
        stylesheets: {
          files: "*",
          options: {
            livereload: true,
            spawn: false
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 1989,
            base: "",
            hostname: "*"
          }
        }
      }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.registerTask("default", "Watches the project for changes and runs a server.", ["connect", "watch"]);
  };

}).call(this);
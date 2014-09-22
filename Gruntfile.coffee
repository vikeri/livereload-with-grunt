module.exports = (grunt) ->

  # configure the tasks
  grunt.initConfig
    watch:
      stylesheets:
        files: "*"
        options: 
          livereload: true
    connect:
      server:
        options:
          port: 1989
          base: ""
          hostname: "*"

  
  # load the tasks
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-connect"
  
  # define the tasks
  grunt.registerTask "default", "Watches the project for changes and runs a server.", 
  [
    "connect"
    "watch"
  ]
  return

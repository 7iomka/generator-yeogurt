// Configuration for JST task(s)
// Compile JST templates to single `.js` file
// using the JST namespace (accessible via window.JST)
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('jst', {
    server: {
      files: {
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jst'
        ]
      }
    },
    dist: {
      files: {
        '<%%= yeogurt.directories.destination %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jst'
        ]
      }
    }<% if (jsFramework === 'backbone') { %>,
    test: {
      options: {
        namespace: 'JST'
      },
      files: {
        '<%%= yeogurt.directories.temporary %>/templates.js': [
          '<%%= yeogurt.directories.source %>/{<%%= yeogurt.directories.modules %>,<%%= yeogurt.directories.screens %>}/**/*.jst'
        ]
      }
    }<% } %>
  });

};

module.exports = taskConfig;

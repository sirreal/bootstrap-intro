module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      index: {
        files: ['templates/_index.html', 'templates/_section.html', 'slides/list.json'],
        tasks: ['buildIndex']
      },
      examples: {
        files: ['templates/_ex.html', '_ex/**'],
        tasks: ['buildEx']
      },
      jshint: {
        files: ['js/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['css/source/theme.scss'],
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components/reveal.js/css/theme/source']
      },
      theme: {
        files: {
          'css/theme.css': 'css/source/theme.scss'
        }
      }
    },
    browserSync: {
      dev: {
        options: {
          watchTask: true,
          server: {
            baseDir: '.',
            routes: {
              '/lib/font': './bower_components/reveal.js/lib/font'
            }
          },
          open: false,
          port: 9000,
        },
        bsFiles: {
          src: [
            'css/source/**',
            'ex/**',
            'slides/**'
          ]
        },
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/*.js']
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: [
              'slides/**',
              'bower_components/**',
              'js/**',
              'font/**',
              'css/*.css',
              'img/**',
              'ex/**'
            ],
            dest: 'dist/'
          }, {
            expand: true,
            src: ['index.html'],
            dest: 'dist/',
            filter: 'isFile'
          }
        ]
      }
    },
    buildcontrol: {
      options: {
        dir: 'dist',
        commit: true,
        push: true,
        message: 'Built from %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:sirreal/bootstrap-intro.git',
          branch: 'gh-pages'
        }
      }
    }
  });
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('buildEx', 'Build examples from templates/_ex.html and ex/**/*.html', function() {
    var indexTemplate, examples;

    var path = require('path');
    var escape = require('escape-html');

    indexTemplate = grunt.file.read('templates/_ex.html');
    examples = grunt.file.expand({cwd: '_ex'}, '**/*.html');
    examples.forEach(function(f) {
      var content = grunt.file.read(path.join('_ex', f));
      var html = grunt.template.process(indexTemplate, {
        data: {
          title: f,
          content: content,
          escapedContent: escape(content)
        }
      });
      grunt.file.write(path.join('ex', f), html);
      grunt.log.ok('Example compiled: %s', f);
    });
  });

  grunt.registerTask('buildIndex', 'Build index.html from templates/_index.html and slides/list.json.', function() {
    var html, indexTemplate, sectionTemplate, slides;
    indexTemplate = grunt.file.read('templates/_index.html');
    sectionTemplate = grunt.file.read('templates/_section.html');
    slides = grunt.file.readJSON('slides/list.json');
    html = grunt.template.process(indexTemplate, {
      data: {
        slides: slides,
        section: function(slide) {
          return grunt.template.process(sectionTemplate, {
            data: {
              slide: slide
            }
          });
        }
      }
    });
    grunt.file.write('index.html', html);
  });
  grunt.registerTask('test', '*Lint* javascript and coffee files.', ['jshint']);
  grunt.registerTask('serve', 'Run presentation locally and start watch process (living document).', ['buildIndex', 'sass', 'doWatch']);
  grunt.registerTask('dist', 'Save presentation files to *dist* directory.', ['test', 'sass', 'buildIndex', 'buildEx', 'copy']);
  grunt.registerTask('deploy', 'Deploy to Github Pages', ['dist', 'buildcontrol']);
  grunt.registerTask('doWatch', ['browserSync', 'watch']);
  grunt.registerTask('default', ['test', 'serve']);
};

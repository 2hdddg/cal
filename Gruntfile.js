var sys = require('sys');
var exec = require('child_process').exec;

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                background: false
            },
            dev: {
                options:{
                    script: 'server/server.js'
                }
            }
        },
        mochacli: {
            options: {
            },
            all: ['test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.registerTask('test', ['mochacli']);
    grunt.registerTask('default', ['express']);
};
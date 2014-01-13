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
        },
        env: {
            dev: {
                NODE_ENV: 'development',
                CAL_DB_NAME: 'cal_test',
                CAL_DB_USER: 'cal_test_user',
                CAL_DB_PASS: 'cal_test_pass'
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-env');

    grunt.registerTask('test', ['env:dev', 'mochacli']);
    grunt.registerTask('server', ['env:dev','express']);

    // sudo -u postgres psql
};
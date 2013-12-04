module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vows: {
                all: {
                    options: {
                        // String {spec|json|dot-matrix|xunit|tap}
                        // defaults to "dot-matrix"
                        reporter: "spec",
                        // String or RegExp which is
                        // matched against title to
                        // restrict which tests to run
                        // Boolean, defaults to false
                        verbose: true,
                        // Boolean, defaults to false
                        silent: false,
                        // Colorize reporter output,
                        // boolean, defaults to true
                        colors: true,
                        // Run each test in its own
                        // vows process, defaults to
                        // false
                        isolate: false,
                        // String {plain|html|json|xml}
                        // defaults to none
                        coverage: "json"
                    },
                    // String or array of strings
                    // determining which files to include.
                    // This option is grunt's "full" file format.
                    src: ["tests/*.js"]
                }
            }
    });

    grunt.loadNpmTasks("grunt-vows");
};
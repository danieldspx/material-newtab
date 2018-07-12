module.exports = function(grunt){
    grunt.initConfig({
        watch: {
            js: {
                files: ['js/**/*.js','!js/**/*.min.js'],
                tasks: ['uglify:js'],
            },
            css: {
                files: ['css/**/*.css','!css/**/*.min.css'],
                tasks: ['cssmin:target'],
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            js: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['**/*.js','!**/*.min.js'],
                    dest: 'js',
                    rename: function (dst, src) {
                        return dst + '/' + src.replace('.js', '.min.js');
                    }
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',[
        'uglify:js',
        'cssmin',
        'watch'
    ]);
};

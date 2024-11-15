module.exports = function (grunt) {
  grunt.initConfig({
    // Configurações das tarefas aqui
    less: {
      development: {
        files: {
          "./dist/styles/main.css": "./src/styles/main.less",
        },
      },
    },

    uglify: {
      my_target: {
        files: {
          "./dist/scripts/main.min.js": "./src/scripts/main.js",
        },
      },
    },

    watch: {
      styles: {
        files: ["./src/styles/main.less"],
        tasks: ["less"],
      },
      scripts: {
        files: ["./src/scripts/main.js"],
        tasks: ["uglify"],
      },
    },
  });

  // Carregue os plugins do Grunt aqui
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Defina as tarefas padrão aqui
  grunt.registerTask("default", ["less", "uglify", "watch"]);
};

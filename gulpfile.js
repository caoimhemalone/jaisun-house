// gulpfile.js
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    concat = require("gulp-concat"),
    autoprefixer = require("autoprefixer"),
    uglify = require('gulp-uglify'),
    cssnano = require("cssnano");

// Put this after including our dependencies
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "./src/assets/scss/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "./src/assets/css"
    },
};

function style() {
    return (
        gulp
            .src(['./src/assets/scss/*.scss'])      
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(concat('main.css'))
            .pipe(gulp.dest("./src/assets/css"))
    );
}


 
function watch() {
    //I usually run the compile task when the watch task starts as well
    style();
 
    gulp.watch(paths.styles.src, style);
}
    
// Don't forget to expose the task!
exports.default = watch
var gulp = require("gulp"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba"),
lost = require("lost");

//This task will convert postcss to normal css file.
gulp.task("styles", function() {
    //Source file
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, lost, autoprefixer]))
        //If there is an error this function will display an error without breaking the task
        .on("error", function(info) {
            console.log(info.toString);
            this.emit("end");
        })
        //Destination folder
        .pipe(gulp.dest("./app/temp/styles"));
});

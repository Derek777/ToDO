var
    gulp        = require("gulp"),
    livereload  = require("gulp-livereload");

gulp.task("reload", function () {
    gulp.src('./style.css')
        .pipe(livereload());
});

gulp.task("default", function () {
   livereload.listen();
   gulp.watch('./style.css', ["reload"]);
});
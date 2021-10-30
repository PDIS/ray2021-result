var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var compress = require("gulp-compressor");

gulp.task("minify-images", function () {
  return gulp
    .src("./source/image/*.JPG")
    .pipe(imagemin())
    .pipe(gulp.dest("./source/image"));
});

gulp.task("default", gulp.series(gulp.parallel("minify-images")), function () {
  console.log("----------gulp Finished----------");
  // Do something after a, b, and c are finished.
});

var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

gulp.task("minify-images", function () {
  return gulp
    .src("./public/image/**/*.*")
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ optimizationLevel: 3 }),
          imagemin.mozjpeg({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 7 }),
          imagemin.svgo(),
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest("./public/image"));
});

gulp.task('default', gulp.series(gulp.parallel('minify-images')), function () {
    console.log("----------gulp Finished----------");
    // Do something after a, b, and c are finished.
});
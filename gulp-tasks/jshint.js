var gulp 	= require("gulp"),
jshint 		= require("gulp-jshint"), 
stylish 	= require("jshint-stylish"), 		
notify 		= require("gulp-notify");

gulp.task("jsHint", function() {
  return gulp.src("www/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
	.pipe(notify("Task jsHint complete."));
});
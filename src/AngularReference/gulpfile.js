var gulp = require("gulp");
var fs = require("fs");

var paths = {
	npm: './node_modules/',
	lib: "./wwwroot/lib/"
};

gulp.task("copy", function () {
	var npm = {
		"requirejs": "requirejs/require.js",
		"angular": "angular/angular.js"
	}

	for (var destinationDir in npm) {
		console.log(paths.lib + destinationDir);
		gulp.src(paths.npm + npm[destinationDir]).pipe(gulp.dest(paths.lib + destinationDir));
	}
});
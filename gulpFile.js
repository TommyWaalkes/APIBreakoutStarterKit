const gulp = require("gulp");

gulp.task("default", ()=> {
    console.log("Suuuup, disreguard muncipal authorities and acquire excessive currency");
});
gulp.task("taskOne", ["default"], ()=>{
    console.log("Get in my van now!");
});
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;



animation();

function animation(){
    requestAnimationFrame(animation);
}
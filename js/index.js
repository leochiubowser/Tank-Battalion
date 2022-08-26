var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

var title = new Title();
var tank = new Tank();

animation();

function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    title.draw();
    if (gamePlay.title.show == false)
        tank.draw();
    
}
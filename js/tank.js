class Tank {
    constructor() {
        this.image = new Image();
        this.image.src = "../Image/Player1.png";
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.scale = 1.5;
    }
    draw() {
        ctx.save();
        if (!gamePlay.title.show) {
            ctx.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale);
        }
        ctx.restore();
    }
}
class Title {
    constructor() {
        this.image = new Image();
        this.image.src = "../Image/Title.bmp";
        this.width = this.image.width;
        this.height = this.image.height;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = {
            now: canvas.height,
            limit: canvas.height / 2 - this.height / 2,
        }
        this.velocity = 5;
    }
    draw() {
        if (this.y.now + this.velocity > this.y.limit) {
            this.y.now -= this.velocity;
        }
        else {
            gamePlay.title.moving = false;

            addEventListener("click", () => {
                gamePlay.title.show = false;
            })

            addEventListener("keydown", () => {
                gamePlay.title.show = false;
            })
        }
        if (gamePlay.title.show) {
            ctx.drawImage(this.image, this.x, this.y.now);
        }
    }
}
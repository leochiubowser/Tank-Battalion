class Tank {
    constructor() {
        this.image = new Image();
        this.image.src = "../Image/Player1.png";
        this.x = canvas.width / 2;
        this.y = canvas.height - 50;
        this.velocity = {
            x: 0,
            y: 0,
            speed: 1.5
        }
        this.scale = 1;
    }
    draw() {

        this.move();
        ctx.save();

        ctx.drawImage(
            this.image,
            0,
            -1,
            this.image.width / 8,
            this.image.height / 4,
            this.x - this.image.width / 16,
            this.y - this.image.height / 16,
            this.image.width / 8,
            this.image.height / 4,
        );

        ctx.restore();
    }

    move() {

        addEventListener("keydown", (e) => {

            if (e.key == "ArrowUp") {
                this.velocity.y = -this.velocity.speed;
            }
            else if (e.key == "ArrowDown") {
                this.velocity.y = this.velocity.speed;
            }
            else if (e.key == "ArrowLeft") {
                this.velocity.x = -this.velocity.speed;
            }
            else if (e.key == "ArrowRight") {
                this.velocity.x = this.velocity.speed
            }
        })

        addEventListener("keyup", () => {
            this.velocity.x = 0;
            this.velocity.y = 0;
        })

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
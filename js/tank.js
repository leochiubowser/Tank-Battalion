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
        this.direction = "up";
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

            if (e.key == "ArrowUp" || e.key == "w" || e.key == "W") {
                this.velocity.y = -this.velocity.speed;
                this.direction = "up";
            }
            else if (e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
                this.velocity.y = this.velocity.speed;
                this.direction = "down";
            }
            else if (e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
                this.velocity.x = -this.velocity.speed;
                this.direction = "left";
            }
            else if (e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
                this.velocity.x = this.velocity.speed;
                this.direction = "right"
            }
        })

        addEventListener("keyup", () => {
            this.velocity.x = 0;
            this.velocity.y = 0;
        })


        // Avoid X and Y direction happened at the same time 

        if (this.direction == "up" || this.direction == "down")
            this.velocity.x = 0;
        else if (this.direction == "left" || this.direction == "right")
            this.velocity.y = 0;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
class Tank {
    constructor() {
        this.image = new Image();
        this.image.src = "../Image/Player1.png";
        this.style = 0;
        this.width = this.image.width / 8;
        this.height = this.image.height / 4;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 50;
        this.velocity = {
            x: 0,
            y: 0,
            speed: 1.5
        }
        this.direction = "up";
        this.scale = 1;
        this.rotate = 0;
        this.time = 0;
    }
    draw() {

        this.move();
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        ctx.rotate(this.rotate * Math.PI / 180);
        ctx.drawImage(
            this.image,
            this.style,
            -0.5,
            this.image.width / 8,
            this.image.height / 4,
            -this.width / 2,
            -this.height / 2,
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
                this.rotate = 0;
            }
            else if (e.key == "ArrowDown" || e.key == "s" || e.key == "S") {
                this.velocity.y = this.velocity.speed;
                this.direction = "down";
                this.rotate = 180;
            }
            else if (e.key == "ArrowLeft" || e.key == "a" || e.key == "A") {
                this.velocity.x = -this.velocity.speed;
                this.direction = "left";
                this.rotate = 270;
            }
            else if (e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
                this.velocity.x = this.velocity.speed;
                this.direction = "right"
                this.rotate = 90;
            }


        })

        addEventListener("keyup", () => {
            this.velocity.x = 0;
            this.velocity.y = 0;
        })

        this.time += 2;

        if (this.velocity.x != 0 || this.velocity.y != 0) {
            if (this.style == 0 && this.time > 10) {
                this.style = 28;
                this.time = 0;
            }
            else if (this.style == 28 && this.time > 10) {
                this.style = 0;
                this.time = 0;
            }
        }

        // Avoid X and Y direction happened at the same time 

        if (this.direction == "up" || this.direction == "down")
            this.velocity.x = 0;
        else if (this.direction == "left" || this.direction == "right")
            this.velocity.y = 0;

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}
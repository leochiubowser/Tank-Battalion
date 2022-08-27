class Bullet {
    constructor() {
        this.image = new Image();
        this.image.src = "../Image/Bullet.png";
        this.width = this.image.width / 4;
        this.height = this.image.height;
        this.x = tank.x + 9.5;
        this.y = tank.y - 10;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.speed = 6;
        this.direction = tank.direction;
    }

    draw() {
        this.move();
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, 0, 0, this.width, this.height,
            this.x, this.y, this.width, this.height);

    }

    move() {

        if (this.direction == "up")
            this.velocity.y = -this.speed;
        else if (this.direction == "left")
            this.velocity.x = -this.speed;
        else if (this.direction == "right")
            this.velocity.x = this.speed;
        else if (this.direction == "down")
            this.velocity.y = this.speed;


        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}
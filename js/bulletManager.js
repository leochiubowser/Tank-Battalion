class bulletManager {

    static bullets = [];
    static instantiate() {
        this.bullets.push(new Bullet());
    }
    static time = 0;

    static draw() {
        this.time += 1;

        addEventListener("keydown", (e) => {
            if (e.key == " " && this.time > 30) {
                bulletManager.instantiate();
                this.time = 0;
            }
        })

        for (var i = 0; i < this.bullets.length; i++) {
            if (this.bullets.length > 0) {
                this.bullets[i].draw();
            }
            if (this.bullets[i].y < 0 || this.bullets[i].y > canvas.height || 
                this.bullets[i].x < 0 || this.bullets[i].x > canvas.width) {
                this.bullets.splice(i, 1);
            }
        }
    }
}
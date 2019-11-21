function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.game = options.game;
    this.isWrappable = options.isWrappable;
    this.hp = options.hp;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    ctx.strokeStyle = "#f00"; // some color/style
    ctx.lineWidth = 2; // thickness
    ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
}

MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(this.pos)) {
        if (this.isWrappable) {
            this.pos = this.game.wrap(this.pos);
        } else if (!this.isWrappable && this.game.bullets.includes(this)) {
            this.game.removeBullet(this);
        }
    }
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    // let dist = Math.sqrt((this.pos[0] - 6 - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    // return dist <= 30;
    let result = {true: "", right: "", left: "", down: "", up: ""}
    // let result;
    // let right;
    // let left;
    // let down;
    // let up;
    if (this.pos[0] < otherObject.pos[0] + otherObject.width &&
    this.pos[0] + this.width > otherObject.pos[0] &&
    this.pos[1] < otherObject.pos[1] + otherObject.height &&
    this.pos[1] + this.height > otherObject.pos[1])
    {
        result.true = true;
        result.right = this.pos[0] + this.width - otherObject.pos[0];
        result.left = this.pos[0] - (otherObject.pos[0] + otherObject.width);
        result.down = this.pos[1] + this.height - otherObject.pos[1]; 
        result.up = this.pos[1] - (otherObject.height + otherObject.pos[1]);
        return result;
    }

    // this.pos[1] < otherObject.pos[1] + otherObject.width &&
    //   this.pos[1] + this.width > otherObject.pos[1] &&
    //   this.pos[0] < otherObject.pos[0] + otherObject.height &&
    //   this.pos[0] + this.height > otherObject.pos[0];
}


module.exports = MovingObject;
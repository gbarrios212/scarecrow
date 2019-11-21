function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.game = options.game;
    this.isWrappable = options.isWrappable;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
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
    let dist = Math.sqrt((this.pos[0] - 6 - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    return dist <= 30;
    // if (this.pos[0] < otherObject.pos[0] + otherObject.width && this.pos[0] + this.width > otherObject.pos[0] &&
    //     this.pos[1] < otherObject.pos[1] + otherObject.height && this.pos[1] + this.height > otherObject.pos[1]) {
    //         return true } 
    //with corn 
   
   //better corn to scare, nothing else tho.vullet may be broken?
   
    // if (this.pos[0] < otherObject.pos[0] + otherObject.width / 4.5 && //left of scare to right of corn 
    //     this.pos[0] + this.width / 1.3 > otherObject.pos[0] && // right of scare, left of corn 
    //     this.pos[1] < otherObject.pos[1] + otherObject.height/ 1.5 &&
    //     this.pos[1] + this.height / 1.5 > otherObject.pos[1]) {
    //     // collision detected!
    //     // debugger;
    //     return true;
    // }
    
}


module.exports = MovingObject;
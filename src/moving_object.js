function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.game = options.game;
    // this.isWrappable = true;
}

//mo.draw(ctx)
//ctx is the canvas 2d rendering context 
// mo is the moving objext
// draw is the function that take sin canvas as an arg and creates a circle 

MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
}

MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(this.pos)) {
    //     if (this.isWrappable) {
            this.pos = this.game.wrap(this.pos);
    //     } else {
    //         this.game.removeBullet(this);
    //     }
    }
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    return dist <= 10;
    // return true;
}

MovingObject.prototype.relocate = function(){
    this.pos = [this.pos[0] + Math.floor(Math.random() * 100), this.pos[1] + Math.floor(Math.random() * 100)];
}

// MovingObject.prototype.collideWith = function (otherObject) {
//   this.game.remove(otherObject);
//   this.game.remove(this);
// }

module.exports = MovingObject;
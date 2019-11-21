const MovingObject = require("./moving_object");
const FatBullet = require("./fat_bullet.js");
const Util = require("./utils.js");

const angryImage = new Image();

angryImage.src = "angry_boy.png";

function AngryTower(options) {
  MovingObject.call(this, {
    pos: [350, 50],
    vel: [0, 0],
    width: 64,
    height: 64,
    image: angryImage,
    game: options.game,
    isWrappable: false
  });

  setInterval(() => {
      this.fireBullet();
  }, 3000)
}

Util.inherits(AngryTower, MovingObject);

AngryTower.prototype.fireBullet = function() {
    let bullet = new FatBullet({
      pos: [this.pos[0] + 25, this.pos[1]],
      vel: [1,0],
      game: this.game,
      isWrappable: false
    });
    this.game.bullets.push(bullet);
};



const cycleLoop = [0, 64, 128, 192, 256, 320, 384, 448];
let currentLoopIndex = 0;
let frameCount = 0;

AngryTower.prototype.draw = function() {
  frameCount++;

    if (frameCount < 6) {
        return ctx.drawImage(
            this.image,
            cycleLoop[currentLoopIndex],
            0,
            this.width,
            this.height,
            this.pos[0],
            this.pos[1],
            this.width / 2,
            this.height / 2
        );
        }
        frameCount = 0;

        ctx.drawImage(
        this.image,
        cycleLoop[currentLoopIndex],
        0,
        this.width,
        this.height,
        this.pos[0],
        this.pos[1],
        this.width / 2,
        this.height / 2
        );
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;

    ctx.strokeStyle = "#f00"; // some color/style
    ctx.lineWidth = 2; // thickness
    ctx.strokeRect(this.pos[0], this.pos[1], this.width / 2, this.height / 2);
    };
}

module.exports = AngryTower;

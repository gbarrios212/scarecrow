const MovingObject = require("./moving_object");
const FatBullet = require("./fat_bullet.js");
const Util = require("./utils.js");

const angryImage = new Image();

angryImage.src = "angry_boy.png";

function AngryTower(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: [0, 0],
    width: 64,
    height: 64,
    image: angryImage,
    game: options.game,
    isWrappable: false
  });

  this.frameCount = 0;
  this.currentLoopIndex = 0;
  this.cycleLoop = [0, 64, 128, 192, 256, 320, 384, 448];
  // setInterval(() => {
  //     this.fireBullet();
  // }, 5000)
}

Util.inherits(AngryTower, MovingObject);

AngryTower.prototype.fireBullet = function() {
  // debugger;
    let rightBullet = new FatBullet({
      pos: [this.pos[0] + 25, this.pos[1]],
      vel: [1,0],
      game: this.game,
      isWrappable: false
    });
    let leftBullet = new FatBullet({
      pos: [this.pos[0] - 25, this.pos[1]],
      vel: [-1, 0],
      game: this.game,
      isWrappable: false
    });
    // this.game.bullets.concat([rightBullet, leftBullet]);
    this.game.bullets.push(leftBullet);
    this.game.bullets.push(rightBullet);
};



// const 

AngryTower.prototype.draw = function(ctx) {
  // let currentLoopIndex = 0;
  //mod not < etc 
  // class framecount vs constr
  this.frameCount++;
    if (this.frameCount % 3 === 0) {
        this.currentLoopIndex++;
        }

        if (this.frameCount % 250 === 0) {
          this.fireBullet();
        }
        

        ctx.drawImage(
        this.image,
        this.cycleLoop[this.currentLoopIndex],
        0,
        this.width,
        this.height,
        this.pos[0],
        this.pos[1],
        this.width / 2,
        this.height / 2
        );
        
        if (this.currentLoopIndex >= this.cycleLoop.length) {
        this.currentLoopIndex = 0;

        // if (this.frameCount === 64) {
        //   this.frameCount = 0;
        // }
   
    };
}

module.exports = AngryTower;

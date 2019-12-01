const MovingObject = require("./moving_object");
const Corn = require("./corn.js");
const Util = require("./utils.js");

const bulletImage = new Image ();
// bulletImage.src = "../dist/bullet.png"
bulletImage.src = "./bullet.png";

function Bullet(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: options.vel, 
            height: 30, 
            width: 30, 
            image: options.image || bulletImage, 
            game: options.game, 
            isWrappable: options.isWrappable 
        });
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Corn) {
      if (otherObject.hp <= 780 ) {
          otherObject.hp += 20;
          // console.log(`corn hp is ${otherObject.hp}`);
        }
    this.game.removeBullet(this);
  } 
};

module.exports = Bullet;
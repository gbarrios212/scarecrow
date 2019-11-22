const MovingObject = require("./moving_object");
const Corn = require("./corn.js");
const Util = require("./utils.js");
const Bullet = require("./utils.js")

const FatBulletImage = new Image();
// bulletImage.src = "../dist/bullet.png"
FatBulletImage.src = "./angry_heart.png";

function FatBullet(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: options.vel,
    height: 30,
    width: 30,
    image: FatBulletImage,
    game: options.game,
    isWrappable: false
  });
}

Util.inherits(FatBullet, MovingObject);

FatBullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Corn) {
    if (otherObject.hp <= 780) {
      otherObject.hp += 100;
      console.log(`corn hp is ${otherObject.hp}`);
    }
    this.game.removeBullet(this);
  }
};

module.exports = FatBullet;

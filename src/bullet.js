const MovingObject = require("./moving_object");
const Util = require("./utils.js");

const bulletImage = new Image ();
bulletImage.src = "../dist/bullet.png"

function Bullet(options) {
    MovingObject.call(this, { pos: options.pos, vel: options.vel, height: 30, width: 30, image: bulletImage, game: options.game });
}

Util.inherits(Bullet, MovingObject);

module.exports = Bullet;
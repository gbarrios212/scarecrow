const MovingObject = require("./moving_object.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");
const Util = require("./utils.js");


const crowImage = new Image ();
crowImage.src = "../dist/crow0.png";

const CONSTANTS = {
    MAX_X: 10,
    MAX_Y: 10,
};

function Crow(options) {
    MovingObject.call(this, { pos: options.pos, vel: options.vel, width: 60, height: 60, image: crowImage, game: options.game })
}

Util.inherits(Crow, MovingObject);

Crow.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Scarecrow) {
        otherObject.relocate();
    } else if (otherObject instanceof Bullet) {
        this.game.removeCrow(this);
        // this.game.removeBullet(otherObject);
    }
}

module.exports = Crow; 
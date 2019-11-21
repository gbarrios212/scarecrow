const MovingObject = require("./moving_object.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");
const Corn = require("./corn.js");
const Util = require("./utils.js");


const crowImage = new Image ();
// crowImage.src = "../dist/crow0.png";
crowImage.src = "../dist/crow_bad_OPT.png";
const CONSTANTS = {
    MAX_X: 10,
    MAX_Y: 10,
};

function Crow(options) {
    MovingObject.call(this, { pos: options.pos, vel: options.vel, width: 30, height: 30, image: crowImage, game: options.game, isWrappable: true })
}

Util.inherits(Crow, MovingObject);

Crow.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Scarecrow) {
        otherObject.paralyze();
        console.log("crow!!!!")
    } else if (otherObject instanceof Bullet) {
        // debugger;
        this.game.removeCrow(this);
        this.game.removeBullet(otherObject);
    } else if (otherObject instanceof Corn) {
        // console.log("crow-corn")
        this.game.gameMap[otherObject.pos[1]/40][otherObject.pos[0]/40] = 0;
        this.game.removeCorn(otherObject);
        // if (this.pos[1] > 0){
        //     this.game.gameMap[Math.ceil(this.pos[1] / 40) - 1][Math.ceil(this.pos[0] / 40) - 1] = 0;
        // }
    }
}

module.exports = Crow; 
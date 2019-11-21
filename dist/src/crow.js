const MovingObject = require("./moving_object.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");
const Corn = require("./corn.js");
const Util = require("./utils.js");


const crowImage = new Image ();
// crowImage.src = "../dist/crow_bad_OPT.png";
// crowImage.src = "../crow_bad_OPT.png";
crowImage.src = "crow_bad_OPT.png";
const CONSTANTS = {
    MAX_X: 10,
    MAX_Y: 10,
};

function Crow(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: options.vel, 
            width: 30, 
            height: 30, 
            image: crowImage, 
            game: options.game, 
            isWrappable: true,
            hp: 80
        })
}

Util.inherits(Crow, MovingObject);

Crow.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Scarecrow) {
        otherObject.paralyze();
        console.log("crow!!!!")
    } else if (otherObject instanceof Bullet) {
        if (this.hp === 10 ) {
            this.game.removeCrow(this);
        } else {
            this.game.removeBullet(otherObject);
            this.hp -= 10;
            console.log(`bird hp is ${this.hp}`)
        }
        // this.game.removeCrow(this);
    } else if (otherObject instanceof Corn) {
        if (otherObject.hp === 10) {
            console.log("crow to corn")
            this.game.gameMap[otherObject.pos[1]/40][otherObject.pos[0]/40] = 0;
            this.game.removeCorn(otherObject);
        } else {
            otherObject.hp -= 10;
        }
    }
}

module.exports = Crow; 
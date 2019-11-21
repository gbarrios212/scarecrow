const MovingObject = require("./moving_object");
const Util = require("./utils.js");

const cornImage = new Image();

cornImage.src = "../dist/corn_late.png";

function Corn(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: [0, 0], 
            height: 30, 
            width: 30, 
            image: cornImage, 
            game: options.game, 
            isWrappable: false,
            hp: 800 
        })
}

Util.inherits(Corn, MovingObject);

module.exports = Corn;


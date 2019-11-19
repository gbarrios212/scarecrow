const MovingObject = require("./moving_object");
const Util = require("./utils.js");

const cornImage = new Image();
cornImage.src = "../dist/corn0.png";

function Corn(options) {
    MovingObject.call(this, { pos: options.pos, vel: [0, 0], height: 45, width: 45, image: cornImage, game: options.game, isWrappable: false })
}

Util.inherits(Corn, MovingObject);

module.exports = Corn;


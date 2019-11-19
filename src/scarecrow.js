const MovingObject = require("./moving_object");
const Util = require("./utils.js");

const scarecrowImage = new Image ();
scarecrowImage.src = "../dist/scarecrow03.png";

function Scarecrow(options) {
    MovingObject.call(this, { pos: [400, 400], vel: [0, 0], width: 60, height: 60, image: scarecrowImage, game: options.game })
}

Util.inherits(Scarecrow, MovingObject);

module.exports = Scarecrow;
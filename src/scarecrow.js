const MovingObject = require("./moving_object");
const Bullet = require("./bullet.js");
const Util = require("./utils.js");

const scarecrowImage = new Image ();
scarecrowImage.src = "../dist/scarecrow_flying_wide.png";

function Scarecrow(options) {
    MovingObject.call(this, { pos: [300, 100], vel: [0, 0], width: 60, height: 60, image: scarecrowImage, game: options.game, isWrappable: true })
   
}


Util.inherits(Scarecrow, MovingObject);


Scarecrow.prototype.fireBullet = function() {
    let bullet = new Bullet({ pos: this.pos, vel: [3, 3], game: this.game, isWrappable: false });
    this.game.bullets.push(bullet);
}

const cycleLoop = [
    0, 
    64, 
    128, 
    192, 
    256, 
    320, 
    384, 
    448, 
    512, 
    576
];
let currentLoopIndex = 0;
let frameCount = 0;

Scarecrow.prototype.draw = function () {
    frameCount ++;
    if (frameCount < 6){
        return ctx.drawImage(this.image, cycleLoop[currentLoopIndex], 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2)
    }
    frameCount = 0;
    // debugger;

    ctx.drawImage(this.image, cycleLoop[currentLoopIndex], 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
}

module.exports = Scarecrow;
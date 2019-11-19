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

    // ctx.drawImage(this.image, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2); 
    // ctx.drawImage(this.image, 0, 64, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 0, 128, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 0, 192, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 64, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 128, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 192, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    //correct below
    // ctx.drawImage(this.image, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 64, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 128, 0, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, 0, 64, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 64, 64, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 128, 64, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, 0, 128, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 64, 128, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, 128, 128, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, 0, 192, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    //attempted dry 
    // let one = 0;
    // let two = 64; 
    // let three = 128; 
    // let four = 192;

    // ctx.drawImage(this.image, one, one, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, two, one, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, three, one, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, one, two, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, two, two, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, three, two, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, one, three, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, two, three, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);
    // ctx.drawImage(this.image, three, three, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // ctx.drawImage(this.image, one, four, this.width, this.height, this.pos[0], this.pos[1], this.width * 2, this.height * 2);

    // window.requestAnimationFrame(this.step.bind(this));
    // this.step();
}

module.exports = Scarecrow;
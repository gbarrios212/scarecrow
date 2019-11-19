const Crow = require("./crow.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");

const CONSTANTS = {
    DIM_X: 1200,
    DIM_Y: 800,
    VEL_X: 10,
    VEL_Y: 10,
    NUM_CROWS: 40
};

function Game() {
    this.crows = [];
    this.bullets = [];
    this.scarecrow = new Scarecrow({ game: this });
    this.addCrows();
    this.img = new Image();
    this.img.src = "green-stuff.jpg";
}

// Game.prototype.allObjects = function(){
//     returi
// }

Game.prototype.addCrows = function () {
    while (this.crows.length < CONSTANTS.NUM_CROWS) {
        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    }
}

Game.prototype.randomPosition = function () {
    let position = [];
    position.push(Math.floor(Math.random() * CONSTANTS.DIM_X));
    position.push(Math.floor(Math.random() * CONSTANTS.DIM_Y));
    return position;
}


Game.prototype.randomVelocity = function () {
    let velocity = [];
    velocity.push(Math.floor(Math.random() * CONSTANTS.VEL_X));
    velocity.push(Math.floor(Math.random() * CONSTANTS.VEL_Y));
    return velocity;
}

Game.prototype.allObjects = function () {
    return this.crows
    .concat(this.scarecrow, this.bullets);
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    ctx.drawImage(this.img, 0, 0, 1200, 800);
    this.allObjects().forEach(movingObj => movingObj.draw(ctx));
}

Game.prototype.moveObjects = function () {
    this.allObjects().forEach(movingObj => movingObj.move());
}

Game.prototype.wrap = function (pos) {
    if (pos[0] > CONSTANTS.DIM_X) {
        pos[0] = 0;
    } else if (pos[0] < 0) {
        pos[0] = CONSTANTS.DIM_X;
    }

    if (pos[1] > CONSTANTS.DIM_Y) {
        pos[1] = 0;
    } else if (pos[1] < 0) {
        pos[1] = CONSTANTS.DIM_Y;
    }

    return pos;
}

Game.prototype.isOutOfBounds = function (pos) {
    return pos[0] > CONSTANTS.DIM_X || pos[0] < 0 || pos[1] > CONSTANTS.DIM_Y || pos[1] < 0;
}

Game.prototype.checkCollisions = function () {
    this.allObjects().forEach((movingObj, i) => {
        this.allObjects().forEach((movingObj2, j) => {
            if (i !== j && movingObj.isCollidedWith(movingObj2)){
                if (movingObj instanceof Crow && movingObj2 instanceof Scarecrow ) {
                    movingObj.collideWith(movingObj2)
                } else if (movingObj2 instanceof Crow && movingObj instanceof Scarecrow) {
                    movingObj2.collideWith(movingObj)
                // } else if (movingObj instanceof Bullet && movingObj2 instanceof Crow ) {
                //     movingObj2.collideWith(movingObj)
                // }
                // } else if (movingObj instanceof Crow && movingObj2 instanceof Bullet) {
                //     movingObj.collideWith(movingObj2)
                }
            }
        });
    });
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.removeCrow = function(movingObj) {
    let idx = this.crows.indexOf(movingObj);
    this.crows.splice(idx,1);
}

Game.prototype.removBullet = function (movingObj) {
    let idx = this.bullets.indexOf(movingObj);
    this.bullets.splice(idx, 1);
}


module.exports = Game;
const Crow = require("./crow.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");
const Corn = require("./corn.js");

const CONSTANTS = {
    DIM_X: 700,
    DIM_Y: 450,
    CORN_X: 280,
    CORN_Y: 120,
    VEL_X: 2,
    VEL_Y: 2,
    NUM_CROWS: 0,
    NUM_CORNS: 15
};

const tileWidth = 40, tileHeight = 40;
const mapWidth = 20, mapHeight = 10;

const gameMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function Game() {
    this.crows = [];
    this.bullets = [];
    this.corns = [];
    this.scarecrow = new Scarecrow({ game: this });
    this.addCrows();
    this.addCorns();
    this.img = new Image();
    
    // this.img.src = "green-stuff.jpg";
    this.img.src = "farmland_later_single.png";
    this.gameMap = gameMap;
}

Game.prototype.draw = function (ctx) {
    // for( let y = 0; y < mapHeight; y ++) {
    //     for(let x = 0; x < mapWidth; x ++) {
        let pattern = ctx.createPattern(this.img, 'repeat');
        let fieldPattern = new Image();
        fieldPattern.src = "corn_field_later_single.png";
        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');
    
        for(let row = 0; row < 10; row ++ ) {
            for(let col = 0; col < 20; col ++) {
            // switch(gameMap[((y*mapWidth) + x)]) {

                switch(gameMap[row][col]){
                case 0: 
                    // ctx.drawImage(this.img, 0, 0, 40, 40);
                    ctx.fillStyle = pattern;
                    break;
                default: 
                    ctx.fillStyle = pattern2;
                    // ctx.fillStyle = "#eeeeee";
            }
            ctx.fillRect(col*tileWidth, row*tileHeight, tileWidth, tileHeight);
        }
    }
    // ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);
    //looks better 750 x 450, also adjust wrap 
    // ctx.drawImage(this.img, 0, 0, 800, 400);
    this.allObjects().forEach(movingObj => movingObj.draw(ctx));
}

Game.prototype.addCrows = function () {
    while (this.crows.length < CONSTANTS.NUM_CROWS) {
        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    }
}

Game.prototype.addCorns = function () {
    // while (this.corns.length < CONSTANTS.NUM_CORNS) {
    //     this.corns.push(new Corn({ pos: this.cornPosition(), game: this }))
    // }
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 20; col++) {
            switch (gameMap[row][col]) {
                case 1:
                    this.corns.push(new Corn({ pos: [col * 40, row * 40], game: this}))
                    // ctx.drawImage(this.img, 0, 0, 40, 40);
                    break;
                default:
                    break;
                    // ctx.fillStyle = pattern2;
                // ctx.fillStyle = "#eeeeee";
            }
            // ctx.fillRect(col * tileWidth, row * tileHeight, tileWidth, tileHeight);
        }
    }
}

Game.prototype.cornPosition = function () {
    let position = [];
    position.push(Math.floor(Math.random() * CONSTANTS.CORN_X) + 200);
    position.push(Math.floor(Math.random() * CONSTANTS.CORN_Y) + 120);
    return position;

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
    .concat(this.scarecrow, this.bullets, this.corns);
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
                } else if (movingObj instanceof Bullet && movingObj2 instanceof Crow ) {
                    movingObj2.collideWith(movingObj)
                } 
                else if (movingObj instanceof Crow && movingObj2 instanceof Corn) {
                    movingObj.collideWith(movingObj2)
                }
                // else if (movingObj instanceof Scarecrow && movingObj2 instanceof Corn) {
                    
                //     movingObj.collideWith(movingObj2);
                // }
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

Game.prototype.removeBullet = function (movingObj) {
    let idx = this.bullets.indexOf(movingObj);
    this.bullets.splice(idx, 1);
}

Game.prototype.removeCorn = function (movingObj) {
    let idx = this.corns.indexOf(movingObj);
    this.corns.splice(idx, 1);
}


module.exports = Game;
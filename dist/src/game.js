const Crow = require("./crow.js");
const Scarecrow = require("./scarecrow.js");
const Bullet = require("./bullet.js");
const FatBullet = require("./fat_bullet.js");
const Corn = require("./corn.js");
const AngryTower = require("./angry_tower.js");

const CONSTANTS = {
    DIM_X: 800,
    DIM_Y: 400,
    CORN_X: 280,
    CORN_Y: 120,
    VEL_X: 2,
    VEL_Y: 2,
    NUM_CROWS: 1,
    //NUM_CROWS: 13 seems fine for difficulty
    NUM_CORNS: 1
};

const tileWidth = 40, tileHeight = 40;
const mapWidth = 20, mapHeight = 10;

const gameMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

function Game() {
    this.crows = [];
    this.bullets = [];
    this.corns = [];
    this.towers = [];
    this.towersAvail = 4;
    this.buildTowers();
    this.scarecrow = new Scarecrow({ game: this });
    this.addCrows();
    this.addCorns();
    this.img = new Image();
    this.img.src = "farmland_later_single.png";
    this.gameMap = gameMap;
    grid = document.getElementById("preview-grid");
    let ele;
    for (tile = 1; tile < this.gameMap.length * this.gameMap[0].length + 1; tile ++) {
        ele = document.createElement("div");
        ele.id = tile;
        grid.appendChild(ele);
    }
    document.addEventListener("mousemove", highlight);
}

function highlight(e) {
    elem = document.getElementById("scarecrow-canvas");
    grid = document.getElementById("preview-grid"); 

    elemLeft = elem.offsetLeft;
    elemTop = elem.offsetTop;
    let pos = {
      x: e.clientX - elemLeft,
      y: e.clientY - elemTop
    };
    let tileCol = Math.ceil(pos.y / 40);
    let tileRow = Math.ceil(pos.x / 40) - 1;
    let tileValue = gameMap[tileCol][tileRow];
    if (tileValue !== 1) {
        grid.classList.add("good");
    } else {
        grid.classList.remove("good");
    }
}

//constructor listener 
//top level build
//^ bind in cons.

Game.prototype.buildTowers = function () {
    let that = this;
    grid = document.getElementById("preview-grid");
    document.addEventListener("click", build);
    function build(e) {
        elem = document.getElementById("scarecrow-canvas");
        elemLeft = elem.offsetLeft;
        elemTop = elem.offsetTop;
        let pos = {
            x: e.clientX - elemLeft,
            y: e.clientY - elemTop
        };
        // console.log(pos);
        let tileCol = Math.floor(pos.y / 40)
        let tileRow = Math.floor(pos.x / 40)
        let tileValue = that.gameMap[tileCol][tileRow];
        if (tileValue !== 1) {
           
            angryTower = new AngryTower({ pos: [pos.x, pos.y], game: that });
            that.towers.push(angryTower);
            tileValue = 1;
            that.towersAvail -= 1;
        } else {
           
            console.log("NO")
        }
        if (that.towersAvail === 0) {
            document.removeEventListener("click", build);
            document.removeEventListener("mousemove", highlight);
            grid.classList.remove("good");
            grid.id = "preview-grid-off";
            console.log("done");
        }
    }
}




Game.prototype.draw = function (ctx) {
        let pattern = ctx.createPattern(this.img, 'repeat');
        let fieldPattern = new Image();
        fieldPattern.src = "corn_field_later_single.png";
        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');
    
        for(let row = 0; row < 10; row ++ ) {
            for(let col = 0; col < 20; col ++) {
                switch(gameMap[row][col]){
                case 0: 
                    ctx.fillStyle = pattern;
                    break;
                default: 
                    ctx.fillStyle = pattern2;
            }
            ctx.fillRect(col*tileWidth, row*tileHeight, tileWidth, tileHeight);
        }
    }
    this.allObjects().forEach(movingObj => movingObj.draw(ctx));
}

Game.prototype.addCrows = function () {
    while (this.crows.length < CONSTANTS.NUM_CROWS) {
        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    }
}

Game.prototype.addCorns = function () {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 20; col++) {
            switch (gameMap[row][col]) {
                case 1:
                    this.corns.push(new Corn({ pos: [col * 40, row * 40], game: this}))
                    break;
            }
        }
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
    velocity.push(Math.ceil(Math.random() * CONSTANTS.VEL_X));
    velocity.push(Math.ceil(Math.random() * CONSTANTS.VEL_Y));
    return velocity;
}

Game.prototype.allObjects = function () {
    return this.crows
    .concat(this.scarecrow, this.bullets, this.corns, this.towers);
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
                } else if (movingObj instanceof Crow && movingObj2 instanceof Bullet ) {
                    movingObj.collideWith(movingObj2)
                } else if (movingObj instanceof Crow && movingObj2 instanceof FatBullet ) {
                    movingObj.collideWith(movingObj2)
                }
                else if (movingObj instanceof FatBullet && movingObj2 instanceof Corn) {
                    movingObj.collideWith(movingObj2)
                }
                else if (movingObj instanceof Crow && movingObj2 instanceof Corn) {
                    movingObj.collideWith(movingObj2)
                }
                else if (movingObj instanceof Scarecrow && movingObj2 instanceof Corn) {
                    let result = movingObj.isCollidedWith(movingObj2);
                    movingObj.collideWith(movingObj2, result);
                } else if (movingObj instanceof Bullet && movingObj2 instanceof Corn) {
                    movingObj.collideWith(movingObj2);
                }
            }
        });
    });
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
    let result = this.didLose();
    if (result){
        this.end("lose");
    } else if (window.time === 0) {
        this.end("win");
    }
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

Game.prototype.didLose = function() {
  if (this.corns.length === 0) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.end = function(result) {
    switch(result) {
        case "win":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            console.log("win");
            break;
        case "lose":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            console.log("lose");
            break;
  }
};


module.exports = Game;
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
};

const tileWidth = 40, tileHeight = 40;
const mapWidth = 20, mapHeight = 10;
const goodCrowImage = new Image ();
goodCrowImage.src = "crow_good.png";

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
    // this.addCrows();
    this.img = new Image();
    this.img.src = "farmland_later_single.png";
    // this.gameMap = gameMap
    this.gameMap = JSON.parse(JSON.stringify(gameMap));
    this.addCorns();
    this.crowSpawn = 5;
    grid = document.getElementById("preview-grid");
    let ele;
    for (tile = 1; tile < this.gameMap.length * this.gameMap[0].length + 1; tile ++) {
        ele = document.createElement("div");
        ele.id = tile;
        grid.appendChild(ele);
    }
    document.addEventListener("mousemove", highlight);
    setInterval(() => {
        this.addCrows();
    }, 15000);
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
    if (pos.x <= 800 && pos.x >= 0 && pos.y <= 400 && pos.y >= 0){

        let tileCol = Math.floor(pos.y / 40);
        let tileRow = Math.floor(pos.x / 40);
        let tileValue = gameMap[tileCol][tileRow];
        if (tileValue !== 1) {
            grid.classList.add("good");
        } else {
            grid.classList.remove("good");
        }
    }
}

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

        if (pos.x <= 800 && pos.x >= 0 && pos.y <= 400 && pos.y >= 0){
        // if (Math.abs(pos.x) <= 800 && Math.abs(pos.y) <= 400){

            // console.log(pos);
            let tileCol = Math.floor(pos.y / 40)
            let tileRow = Math.floor(pos.x / 40)
            let tileValue = that.gameMap[tileCol][tileRow];
            if (tileValue !== 1 && !window.paused) {
                angryTower = new AngryTower({ pos: [tileRow * 40 + 2, tileCol * 40], game: that });
                that.towers.push(angryTower);
                that.gameMap[tileCol][tileRow] = 1;
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
            // }
        }
    }
}
}


 let fieldPattern = new Image();
 fieldPattern.src = "corn_field_later_single.png";

Game.prototype.draw = function (ctx) {
        let pattern = ctx.createPattern(this.img, 'repeat');
        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');
    
        if (window.time < 90) {
            this.img.src = "farmland_later_1.5_single.png";
            fieldPattern.src = "corn_field_later_2_single.png";
        }
        if (window.time < 60) {
            // this.img.src = "farmland_later_2_single.png";
            fieldPattern.src = "corn_field_later_3_single.png";
        }
        if (window.time < 30) {
            this.img.src = "farmland_later_4_single.png";
            fieldPattern.src = "corn_field_later_4_single.png";
        }

        for(let row = 0; row < 10; row ++ ) {
            for(let col = 0; col < 20; col ++) {
                switch(this.gameMap[row][col]){
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
    // while (this.crows.length < CONSTANTS.NUM_CROWS) {
    //     this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    // }
    if (window.time === 0) {
       this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this, image: goodCrowImage})) 
    }

    while (this.crows.length < this.crowSpawn) {
        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    }


    this.crowSpawn *= 1.2;
    // this.crowSpawn *= 1.3;

    // if (window.time === 120) {

    // }
}

Game.prototype.addCorns = function () {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 20; col++) {
            switch (this.gameMap[row][col]) {
                case 1:
                    this.corns.push(new Corn({ pos: [col * 40, row * 40], game: this}))
                    break;
            }
        }
    }
}

Game.prototype.randomPosition = function () {
    let position = [];

    switch(Math.floor((Math.random()) * 10) % 4){
        case 0: 
            position.push(Math.floor(Math.random() * CONSTANTS.DIM_X));
            position.push(750);
            break;
        case 1: 
            position.push(Math.floor(Math.random() * CONSTANTS.DIM_X));
            position.push(2);
            break;
        case 2: 
            position.push(0);
            position.push(Math.floor(Math.random() * CONSTANTS.DIM_Y));
            break;
        case 3: 
            position.push(0);
            position.push(Math.floor(Math.random() * CONSTANTS.DIM_Y));
            break;
    }
    return position;
}



Game.prototype.randomVelocity = function () {
    let velocity = [];
     switch(window.time){
        case 135: 
            velocity.push(Math.random() * 0.5 * this.sign());
            velocity.push(Math.random() * 0.5 * this.sign());
            break;
        case 120: 
            velocity.push(Math.random() * 1 * this.sign());
            velocity.push(Math.random() * 1 * this.sign());
            break;
        case 105: 
            velocity.push(Math.random() * 1.5 * this.sign());
            velocity.push(Math.random() * 1.5 * this.sign());
            break;
        case 90:
            velocity.push(Math.random() * this.sign());
            velocity.push(Math.random() * 2 * this.sign());
            break;
        case 75: 
            velocity.push(Math.random() * -1 * this.sign());
            velocity.push(Math.random()* 1.5 * this.sign());
            break;
        case 60: 
            velocity.push(Math.random() * 2 * this.sign());
            velocity.push(Math.random() * 2 * this.sign());
            break;
        case 45: 
            velocity.push(Math.random() * -2.5 * this.sign());
            velocity.push(Math.random() * 2.5 * this.sign());
            break;
        case 30: 
            velocity.push(Math.random() * 3 * this.sign());
            velocity.push(Math.random() * - 3 * this.sign());
            break;
        case 15: 
            velocity.push(Math.random() * - 4 * this.sign());
            velocity.push(Math.random() * 4 * this.sign());
            break;
        case 0:
            velocity = [0,0];
    }
    return velocity;
}

Game.prototype.allObjects = function () {
    return this.crows
    .concat(this.scarecrow, this.bullets, this.corns, this.towers);
}

Game.prototype.sign = function () {
    switch(Math.floor((Math.random()) * 10) % 2){
        case 0:
            return -1;
        default: 
            return 1;
    } 
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
                // else if (movingObj instanceof Scarecrow && movingObj2 instanceof AngryTower) {
                //     let result = movingObj.isCollidedWith(movingObj2);
                //     movingObj.collideWith(movingObj2, result);
                // }
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
    this.scarecrow.courage += 1
}, 

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
            win = document.getElementById("win-sheet");
            win.id = "win-sheet-on";
            break;
        case "lose":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            console.log("lose");
            lose = document.getElementById("lose-sheet");
            win.id = "lose-sheet-on";
            break;
  }
};


module.exports = Game;
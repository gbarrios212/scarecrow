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
const goodCrowImage = new Image ();
goodCrowImage.src = "crow_good.png";

// const gameMap = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ]


function Game() {
    this.gameMap = [
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
    ];
    this.crows = [];
    this.bullets = [];
    this.corns = [];
    this.towers = [];
    this.towersAvail = 4;
    this.grid = document.getElementById("preview-grid");
    this.fillInventory();
    this.scarecrow = new Scarecrow({ game: this });
    this.img = new Image();
    this.img.src = "farmland_later_single.png";
    // this.gameMap = JSON.parse(JSON.stringify(gameMap));
    this.addCorns();
    this.crowSpawn = 5;

    
    let ele;
    for (tile = 1; tile < this.gameMap.length * this.gameMap[0].length + 1; tile ++) {
        ele = document.createElement("div");
        ele.id = tile;
        this.grid.appendChild(ele);
    };
    this.coords = {x: 0, y: 0};
    this.tileCol;
    this.tileRow;
    this.elem = document.getElementById("scarecrow-canvas");
    this.elemLeft = this.elem.offsetLeft;
    this.elemTop = this.elem.offsetTop;
    highlight = highlight.bind(this);
    document.addEventListener("mousemove", highlight);
    build = build.bind(this);
    document.addEventListener("click", build);

    // setInterval(() => {
    //     this.addCrows();
    // }, 15000);
    this.frameCount = 0;
}

function withinBounds(x, y) {
    return x < 800 && x >= 0 && y < 400 && y >= 0;
}

function highlight(e) {  
    this.coords.x = e.pageX - this.elemLeft;
    this.coords.y = e.pageY - this.elemTop;
    if (withinBounds(this.coords.x, this.coords.y)) {
        this.tileCol = Math.floor(this.coords.y / 40);
        this.tileRow = Math.floor(this.coords.x / 40);
        let tileValue = this.gameMap[this.tileCol][this.tileRow];
        if (tileValue !== 1) {
            this.grid.classList.add("good");
        } else {
            this.grid.classList.remove("good");
        }
    }
}

function build(e) {
    if (withinBounds(this.coords.x, this.coords.y)) {
        debugger;
        let tileValue = this.gameMap[this.tileCol][this.tileRow];
        if (tileValue !== 1 && !window.paused) {
            let x = this.tileRow * 40 + 2;
            let y = this.tileCol * 40;
            angryTower = new AngryTower({ pos: [x, y], game: this });
            this.towers.push(angryTower);
            this.gameMap[this.tileCol][this.tileRow] = 1;
            invSlot = document.getElementById(`inv-${this.towersAvail}`);
            this.towersAvail -= 1;
            invSlot.innerHTML = "";
        }
        if (this.towersAvail === 0) {
            debugger;
            document.removeEventListener("click", build);
            document.removeEventListener("mousemove", highlight);
            this.grid.classList.remove("good");
            this.grid.id = "preview-grid-off";
        }
    }
}

// Game.prototype.removeEvents = function(){
    // document.removeEventListener("click", build);
    // document.removeEventListener("mousemove", highlight);
// }

Game.prototype.fillInventory = function(){
    for (i = 0; i < 4; i ++) {
        invSlot = document.getElementById(`inv-${i + 1}`);
        invSlot.innerHTML = `<img src="angry_boy_single.png"/>`
    }
}

let fieldPattern = new Image();
fieldPattern.src = "corn_field_later_single.png";

Game.prototype.draw = function (ctx) {
    // debugger;

    this.frameCount ++;
    if (this.frameCount === 1 || this.frameCount % 750 === 0) {
        this.addCrows();
    }
        let pattern = ctx.createPattern(this.img, 'repeat');
        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');
    
        if (window.time >= 90) {
            this.img.src = "farmland_later_single.png";
        }
        if (window.time < 90) {
            this.img.src = "farmland_later_1.5_single.png";
            fieldPattern.src = "corn_field_later_2_single.png";
        }
        if (window.time < 60) {
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
    if (window.time === 0) {
       this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this, image: goodCrowImage})) 
    }

    while (this.crows.length < this.crowSpawn) {
        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))
    }
    this.crowSpawn *= 1.2;
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
    gauge = document.getElementById("courage-color");
    pixels = ((this.scarecrow.courage) / 40) * 350;
    gauge.style.width = `${pixels}px`;
} 

Game.prototype.restart = function() {
    document.removeEventListener("click", build);
    document.removeEventListener("mousemove", highlight);

     this.gameMap = [
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
    ];
    this.crows = [];
    this.bullets = [];
    this.corns = [];
    this.towers = [];
    this.towersAvail = 4;
    this.grid = document.getElementById("preview-grid");
    this.fillInventory();
    this.scarecrow = new Scarecrow({ game: this });
    this.img = new Image();
    this.img.src = "farmland_later_single.png";
    this.addCorns();
    this.crowSpawn = 5;
    this.coords = {x: 0, y: 0};
    this.tileCol;
    this.tileRow;
    this.elem = document.getElementById("scarecrow-canvas");
    this.elemLeft = this.elem.offsetLeft;
    this.elemTop = this.elem.offsetTop;
    highlight = highlight.bind(this);
    document.addEventListener("mousemove", highlight);
    build = build.bind(this);
    document.addEventListener("click", build);

    // setInterval(() => {
    //     this.addCrows();
    // }, 15000);

    this.frameCount = 0;
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
            win = document.getElementById("win-sheet");
            win.id = "win-sheet-on";
            break;
            restart = document.getElementById("win-restart")
            restart.addEventListener("click", () => {
                win.id = "win-sheet";
                // window.restart;
            })
        case "lose":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            lose = document.getElementById("lose-sheet");
            lose.id = "lose-sheet-on";
            restart = document.getElementById("lose-restart");
            restart.addEventListener("click", () => {
              lose.id = "lose-sheet";
            //   window.restart();
            });
            break;
  }
};


module.exports = Game;
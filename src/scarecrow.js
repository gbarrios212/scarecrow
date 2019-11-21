const MovingObject = require("./moving_object");
const Bullet = require("./bullet.js");
const Util = require("./utils.js");

const scarecrowImage = new Image ();
scarecrowImage.src = "../dist/scarecrow_flying_wide.png";

function Scarecrow(options) {
    MovingObject.call(this, 
        { 
            pos: [100, 100], 
            vel: [0, 0], 
            width: 60, 
            height: 60, 
            image: scarecrowImage, 
            game: options.game, 
            isWrappable: true, 
            spooked: false
        })
   
}

Util.inherits(Scarecrow, MovingObject);


Scarecrow.prototype.fireBullet = function() {
    // debugger;
    let bullet = new Bullet({ pos: this.pos, vel: [3, 3], game: this.game, isWrappable: false });
    this.game.bullets.push(bullet);
    debugger;
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
    this.scareMove();
    if (this.spooked) {
        let spookedImage = new Image();
        spookedImage.src = "../dist/scarecrow_spooked.png";
        return ctx.drawImage(spookedImage, cycleLoop[currentLoopIndex], 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height)
        // ctx.drawImage()
    }
    if (frameCount < 6){
        return ctx.drawImage(this.image, cycleLoop[currentLoopIndex], 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height)
    }
    frameCount = 0;

    ctx.drawImage(this.image, cycleLoop[currentLoopIndex], 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }

    
}


let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacebarPressed = false; 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        // debugger;
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = true;
    }
    else if (e.key == " " || e.key == "Spacebar") {
        spacebarPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = false;
    }
    else if (e.key == " " || e.key == "Spacebar") {
        spacebarPressed = false;
    }
}

Scarecrow.prototype.scareMove = function () {
    if (rightPressed) {
        if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1 ) {
            this.game.scarecrow.pos[0] += 3;
        } else {
            this.game.scarecrow.pos[0] -= 9;
            console.log(`uh oh no right ${this.pos[0]}`)
        }
    } else if (leftPressed) {
        if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {
            this.game.scarecrow.pos[0] -= 3;
        } else {
            this.game.scarecrow.pos[0] += 12;
            console.log(`uh oh no left ${this.pos[0]}`)
        }
        // this.game.scarecrow.pos[0] -= 3;

    } else if (upPressed) {
        if (this.game.gameMap[Math.ceil(this.pos[1] / 40) - 1][Math.floor(this.pos[0] / 40) + 1] !== 1){
            this.game.scarecrow.pos[1] -= 3;
        } else {
            this.game.scarecrow.pos[1] += 12;
            console.log(`uh oh no up ${this.pos[1]}`)
        }
    } else if (downPressed) {
        if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {
            this.game.scarecrow.pos[1] += 3;
        } else {
            this.game.scarecrow.pos[1] -= 9;
            console.log(`uh oh no down ${this.pos[1]}`)
        }
    }
     else if (spacebarPressed) {
        this.game.scarecrow.fireBullet();
    }
}

Scarecrow.prototype.paralyze = function() {
    this.pos[0] -= 9; 
    this.pos[1] -= 9;
    this.spooked = true;
    for (let scare = 0; scare < 180; scare ++) {
        rightPressed = false;
        leftPressed = false;
        upPressed = false;
        downPressed = false;
        console.log("EEP!")
    }
    this.spooked = false;
}

// Scarecrow.prototype.collideWith = function(movingObject) {
//     return true;
// }
// Scarecrow.prototype.collideWith = function (movingObject) {
//     if (this.pos[0] - movingObject.pos[0] < 0) {
        
//         rightPressed = false;
//     }
//     else if (this.pos[0] - movingObject.pos[0] === 0) {
//         debugger;
//         leftPressed = false;
//     }
//     else if (this.pos[1] - movingObject.pos[1] > 0) {
//         debugger;
//         upPressed = false;
//     }
//     else if (this.pos[1] - movingObject.pos[1] < 0) {
//         debugger;
//         downPressed = false;
//     }
    // if (this.pos[0] - movingObject.pos[0] < 0) {
    //     debugger;
    //     this.pos[0] = movingObject.pos[0];
    // }
// }

module.exports = Scarecrow;
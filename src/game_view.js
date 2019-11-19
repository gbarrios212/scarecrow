const Game = require("./game.js"); 

const CONSTANTS = {
    POWER: 1
};

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false; 
// let spacebarPressed = false; 
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
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
    // else if (e.key == " " || e.key == "Spacebar") {
    //     spacebarPressed = true;
    // }
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
    // else if (e.key == " " || e.key == "Spacebar") {
    //     spacebarPressed = false;
    // }
}


function GameView (ctx) {
    this.game = new Game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    this.bindKeyHandlers();
    
    setInterval(() => {
        this.game.step();
        this.game.draw(this.ctx);
        this.scareMove();
    }, 20);
}

GameView.prototype.scareMove = function () {
    if (rightPressed) {
        this.game.scarecrow.pos[0] += 3;
    } else if (leftPressed) {
        this.game.scarecrow.pos[0] -= 3;
    } else if (upPressed) {
        this.game.scarecrow.pos[1] -= 3;
    } else if (downPressed) {
        this.game.scarecrow.pos[1] += 3;
    }
    //  else if (spacebarPressed) {
    //     this.game.scarecrow.fireBullet();
    // }
}

GameView.prototype.bindKeyHandlers = function () {
    key('space', () => { this.game.scarecrow.fireBullet() });
}

module.exports = GameView;
const MovingObject = require("./moving_object");
const Bullet = require("./bullet.js");
const Util = require("./utils.js");

const scarecrowImage = new Image ();
// scarecrowImage.src = "../dist/scarecrow_flying_wide.png";
scarecrowImage.src = "scarecrow_flying_OPT.png";

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

        });
        this.spooked = false
   
}

Util.inherits(Scarecrow, MovingObject);

Scarecrow.prototype.fireBullet = function() {
    // debugger;
    if (!this.spooked){
    if (frameCount < 6) {
        return;
    }

    let bullet = new Bullet({ 
        pos: [this.pos[0] + 25, this.pos[1] + 10], 
        vel: Util.determineDirection(lastPressed), 
        game: this.game, 
        isWrappable: false 
    });
    this.game.bullets.push(bullet);
    bulletFrameCount = 0;
}
}

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let spacebarPressed = false;
let lastPressed = "";

let leftCollide;
let rightCollide;
let upCollide;
let downCollide;

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

    if (!this.spooked){
        this.scareMove();
    }
    leftCollide = false;
    rightCollide = false;
    upCollide = false;
    downCollide = false;
    if (this.spooked) {
        let spookedImage = new Image();
        // spookedImage.src = "../dist/scarecrow_spooked_FINAL.png";
        spookedImage.src = "scarecrow_spooked_FINAL.png";
        return ctx.drawImage(
            spookedImage, 
            0, 
            0, 
            62, 
            62,
            this.pos[0], 
            this.pos[1], 
            this.width / 1.7, 
            this.height / 1.7
        )
    }
    if (frameCount < 6){
        return ctx.drawImage(
            this.image, 
            cycleLoop[currentLoopIndex], 
            0, 
            this.width, 
            this.height, 
            this.pos[0], 
            this.pos[1], 
            this.width, 
            this.height
        )
    }
    frameCount = 0;

    ctx.drawImage(
        this.image, 
        cycleLoop[currentLoopIndex], 
        0, 
        this.width, 
        this.height, 
        this.pos[0], 
        this.pos[1], 
        this.width, 
        this.height
    );
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }

    ctx.strokeStyle = "#f00"; // some color/style
    ctx.lineWidth = 2; // thickness
    ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = true;
        lastPressed = "right";
    }
    else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = true;
        lastPressed = "left";
    }
    else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = true;
        lastPressed = "up";
    }
    else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = true;
        lastPressed = "down";
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

// Scarecrow.prototype.scareMove = function () {
//     if (rightPressed) {
//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1 ) {
//             this.game.scarecrow.pos[0] += 3;
//         } else {
//             this.game.scarecrow.pos[0] -= 9;
//             console.log(`uh oh no right ${this.pos[0]}`)
//         }
//     } else if (leftPressed) {
//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {
//             this.game.scarecrow.pos[0] -= 3;
//         } else {
//             this.game.scarecrow.pos[0] += 12;
//             console.log(`uh oh no left ${this.pos[0]}`)
//         }
//         // this.game.scarecrow.pos[0] -= 3;

//     } else if (upPressed) {
//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40) - 1][Math.floor(this.pos[0] / 40) + 1] !== 1){
//             this.game.scarecrow.pos[1] -= 3;
//         } else {
//             this.game.scarecrow.pos[1] += 12;
//             console.log(`uh oh no up ${this.pos[1]}`)
//         }
//     } else if (downPressed) {
//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {
//             this.game.scarecrow.pos[1] += 3;
//         } else {
//             this.game.scarecrow.pos[1] -= 9;
//             console.log(`uh oh no down ${this.pos[1]}`)
//         }
//     }
//      else if (spacebarPressed) {
//         this.game.scarecrow.fireBullet();
//     }
// }


Scarecrow.prototype.scareMove = function() {
    // let mapState = this.game.gameMap[Math.ceil(this.pos[0]/40) - 1][Math.ceil(this.pos[1]/40) - 1]
    // // debugger;
    // while (!mapState === 1){
        if (rightPressed) {
            if (!rightCollide) {
                this.game.scarecrow.pos[0] += 3;
            }
            //  else if (rightCollide) {
            //     this.game.scarecrow.pos[0] -= 7;
            // }
            // this.game.scarecrow.pos[0] += 3;
        } else if (leftPressed && !leftCollide) {
            this.game.scarecrow.pos[0] -= 3;
            // if (!leftCollide){
            //     this.game.scarecrow.pos[0] -= 3;
            // } else {
            //     this.game.scarecrow.pos[0] += 0;
            // }
        } else if (downPressed && !downCollide) {
            this.game.scarecrow.pos[1] += 3;
        } else if (upPressed && !upCollide) {
            this.game.scarecrow.pos[1] -= 3;
        } else if (spacebarPressed) {
            this.game.scarecrow.fireBullet();
        }
    // }
}    

Scarecrow.prototype.paralyze = function() {
    this.spooked = true;
    setTimeout(() => {
        this.spooked = false;
    }, 3500);
}

Scarecrow.prototype.collideWith = function(movingObject, result) {
    debugger;
//    if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) > 3 ) {
    if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.left) < Math.abs(result.down)) {
       leftCollide = true;
   } 
//    else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) <= 3 ) {
     else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.left) > Math.abs(result.down)) {
       leftCollide = false;
   }
   if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.up) >=3 ) {
       leftCollide = true;
   } 
   else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.up) <=3 ) {
       leftCollide = false;
   }



   else if (rightPressed && Math.abs(result.right) <= 3  && Math.abs(result.down) >3 ) {
       rightCollide = true;
   }
   else if (rightPressed && Math.abs(result.right) <= 3 && Math.abs(result.down) <=3 ) {
       rightCollide = false;
   }
   else if (rightPressed && Math.abs(result.right) <= 3  && Math.abs(result.up) >3 ) {
       rightCollide = true;
   }
   else if (rightPressed && Math.abs(result.right) <= 3 && Math.abs(result.up) <=3 ) {
       rightCollide = false;
   }

   

   else if (upPressed && Math.abs(result.up) <= 3 && Math.abs(result.up) < Math.abs(result.left)) {
       upCollide = true;
   }
   else if (upPressed && Math.abs(result.up) <= 3 && Math.abs(result.up) > Math.abs(result.left)) {
       upCollide = false;
   }
   else if (upPressed && Math.abs(result.up) <= 3 && Math.abs(result.up) < Math.abs(result.right)) {
       upCollide = true;
   }
   else if (upPressed && Math.abs(result.up) <= 3 && Math.abs(result.up) > Math.abs(result.right)) {
       upCollide = false;
   }


   else if (downPressed && Math.abs(result.down) <= 3 && Math.abs(result.down) < Math.abs(result.left)) {
       downCollide = true;
   }
   else if (downPressed && Math.abs(result.down) <= 3 && Math.abs(result.down) > Math.abs(result.left)) {
       downCollide = false;
   }
   else if (downPressed && Math.abs(result.down) <= 3 && Math.abs(result.down) < Math.abs(result.right)) {
       downCollide = true;
   }
   else if (downPressed && Math.abs(result.down) <= 3 && Math.abs(result.down) > Math.abs(result.right)) {
       downCollide = false;
   }
    // return true;
}

module.exports = Scarecrow;
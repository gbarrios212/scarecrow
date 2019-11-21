/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/src/angry_tower.js":
/*!*********************************!*\
  !*** ./dist/src/angry_tower.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./dist/src/moving_object.js");
const FatBullet = __webpack_require__(/*! ./fat_bullet.js */ "./dist/src/fat_bullet.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");

const angryImage = new Image();

angryImage.src = "angry_boy.png";

function AngryTower(options) {
  MovingObject.call(this, {
    pos: [350, 50],
    vel: [0, 0],
    width: 64,
    height: 64,
    image: angryImage,
    game: options.game,
    isWrappable: false
  });

  setInterval(() => {
      this.fireBullet();
  }, 3000)
}

Util.inherits(AngryTower, MovingObject);

AngryTower.prototype.fireBullet = function() {
    let bullet = new FatBullet({
      pos: [this.pos[0] + 25, this.pos[1]],
      vel: [1,0],
      game: this.game,
      isWrappable: false
    });
    this.game.bullets.push(bullet);
};



const cycleLoop = [0, 64, 128, 192, 256, 320, 384, 448];
let currentLoopIndex = 0;
let frameCount = 0;

AngryTower.prototype.draw = function() {
  frameCount++;

    if (frameCount < 6) {
        return ctx.drawImage(
            this.image,
            cycleLoop[currentLoopIndex],
            0,
            this.width,
            this.height,
            this.pos[0],
            this.pos[1],
            this.width / 2,
            this.height / 2
        );
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
        this.width / 2,
        this.height / 2
        );
        currentLoopIndex++;
        if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;

    ctx.strokeStyle = "#f00"; // some color/style
    ctx.lineWidth = 2; // thickness
    ctx.strokeRect(this.pos[0], this.pos[1], this.width / 2, this.height / 2);
    };
}

module.exports = AngryTower;


/***/ }),

/***/ "./dist/src/bullet.js":
/*!****************************!*\
  !*** ./dist/src/bullet.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./dist/src/moving_object.js");
const Corn = __webpack_require__(/*! ./corn.js */ "./dist/src/corn.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");

const bulletImage = new Image ();
// bulletImage.src = "../dist/bullet.png"
bulletImage.src = "./bullet.png";

function Bullet(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: options.vel, 
            height: 30, 
            width: 30, 
            image: bulletImage, 
            game: options.game, 
            isWrappable: options.isWrappable 
        });
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Corn) {
      if (otherObject.hp <= 780 ) {
          otherObject.hp += 20;
          console.log(`corn hp is ${otherObject.hp}`);
        }
    this.game.removeBullet(this);
  } 
};

module.exports = Bullet;

/***/ }),

/***/ "./dist/src/corn.js":
/*!**************************!*\
  !*** ./dist/src/corn.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./dist/src/moving_object.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");

const cornImage = new Image();

// cornImage.src = "../dist/corn_late.png";
cornImage.src = "./corn_late.png";

function Corn(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: [0, 0], 
            height: 30, 
            width: 30, 
            image: cornImage, 
            game: options.game, 
            isWrappable: false,
            hp: 800 
        })
}

Util.inherits(Corn, MovingObject);

module.exports = Corn;



/***/ }),

/***/ "./dist/src/crow.js":
/*!**************************!*\
  !*** ./dist/src/crow.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./dist/src/moving_object.js");
const Scarecrow = __webpack_require__(/*! ./scarecrow.js */ "./dist/src/scarecrow.js");
const Bullet = __webpack_require__(/*! ./bullet.js */ "./dist/src/bullet.js");
const Corn = __webpack_require__(/*! ./corn.js */ "./dist/src/corn.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");
const FatBullet = __webpack_require__(/*! ./fat_bullet.js */ "./dist/src/fat_bullet.js");


const crowImage = new Image ();
// crowImage.src = "../dist/crow_bad_OPT.png";
// crowImage.src = "../crow_bad_OPT.png";
crowImage.src = "crow_bad_OPT.png";
const CONSTANTS = {
    MAX_X: 10,
    MAX_Y: 10,
};

function Crow(options) {
    MovingObject.call(this, 
        { 
            pos: options.pos, 
            vel: options.vel, 
            width: 30, 
            height: 30, 
            image: crowImage, 
            game: options.game, 
            isWrappable: true,
            hp: 80
        })
}

Util.inherits(Crow, MovingObject);

Crow.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Scarecrow) {
        otherObject.paralyze();
        console.log("crow!!!!")
    } else if (otherObject instanceof Bullet) {
        if (this.hp === 10 ) {
            this.game.removeCrow(this);
        } else {
            this.game.removeBullet(otherObject);
            this.hp -= 10;
            console.log(`bird hp is ${this.hp}`)
        }
    } else if (otherObject instanceof FatBullet) {
        if (this.hp <= 50 ) {
            this.game.removeCrow(this);
            this.game.removeBullet(this);
        } else {
            this.game.removeBullet(otherObject);
            this.hp -= 50;
            console.log(`bird hp is ${this.hp}`)
        }
        // this.game.removeCrow(this);
    } else if (otherObject instanceof Corn) {
        if (otherObject.hp === 10) {
            console.log("crow to corn")
            this.game.gameMap[otherObject.pos[1]/40][otherObject.pos[0]/40] = 0;
            this.game.removeCorn(otherObject);
        } else {
            otherObject.hp -= 10;
        }
    }
}

module.exports = Crow; 

/***/ }),

/***/ "./dist/src/fat_bullet.js":
/*!********************************!*\
  !*** ./dist/src/fat_bullet.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./dist/src/moving_object.js");
const Corn = __webpack_require__(/*! ./corn.js */ "./dist/src/corn.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");
const Bullet = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js")

const FatBulletImage = new Image();
// bulletImage.src = "../dist/bullet.png"
FatBulletImage.src = "./angry_heart.png";

function FatBullet(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: [1, 0],
    height: 30,
    width: 30,
    image: FatBulletImage,
    game: options.game,
    isWrappable: false
  });
}

Util.inherits(FatBullet, MovingObject);

FatBullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Corn) {
    if (otherObject.hp <= 780) {
      otherObject.hp += 100;
      console.log(`corn hp is ${otherObject.hp}`);
    }
    this.game.removeBullet(this);
  }
};

module.exports = FatBullet;


/***/ }),

/***/ "./dist/src/game.js":
/*!**************************!*\
  !*** ./dist/src/game.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Crow = __webpack_require__(/*! ./crow.js */ "./dist/src/crow.js");
const Scarecrow = __webpack_require__(/*! ./scarecrow.js */ "./dist/src/scarecrow.js");
const Bullet = __webpack_require__(/*! ./bullet.js */ "./dist/src/bullet.js");
const FatBullet = __webpack_require__(/*! ./fat_bullet.js */ "./dist/src/fat_bullet.js");
const Corn = __webpack_require__(/*! ./corn.js */ "./dist/src/corn.js");
const AngryTower = __webpack_require__(/*! ./angry_tower.js */ "./dist/src/angry_tower.js");

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
    this.scarecrow = new Scarecrow({ game: this });
    this.angryTower = new AngryTower({ game: this });
    this.addCrows();
    this.addCorns();
    this.img = new Image();
    this.img.src = "farmland_later_single.png";
    this.gameMap = gameMap;
    // setInterval(() => {
    //     console.log(this);
    // }, 3000)
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
    .concat(this.scarecrow, this.bullets, this.corns, this.angryTower);
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

/***/ }),

/***/ "./dist/src/game_view.js":
/*!*******************************!*\
  !*** ./dist/src/game_view.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game.js */ "./dist/src/game.js"); 


function GameView (ctx) {
    this.game = new Game;
    this.ctx = ctx;
}


GameView.prototype.start = function(){
    this.bindKeyHandlers();
    
    window.gameFunc = setInterval(() => {
        this.game.step(); 
        this.game.draw(this.ctx);
    }, 20);
}


GameView.prototype.bindKeyHandlers = function () {
    key('space', () => { this.game.scarecrow.fireBullet() });
}

module.exports = GameView;

/***/ }),

/***/ "./dist/src/index.js":
/*!***************************!*\
  !*** ./dist/src/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const MovingObject = __webpack_require__(/*! ./moving_object.js */ "./dist/src/moving_object.js");
const Crow = __webpack_require__(/*! ./crow.js */ "./dist/src/crow.js");
const Game = __webpack_require__(/*! ./game.js */ "./dist/src/game.js");
const GameView = __webpack_require__(/*! ./game_view.js */ "./dist/src/game_view.js")



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // document.addEventListener("click", () => {
        // const mainSheet = document.getElementById("main-content-sheet");
        // const start = document.getElementById("start-button");
        // const texts = document.querySelectorAll("#text");
        // mainSheet.classList.add("story");
        // start.classList.add("off");
        // texts.forEach(text => {
            // text.classList.toggle("off");
        // })
            

        // mainSheet.innerHTML = "Two years since they've been gone."

    // })

   window.clock = document.getElementById("clock");
   clock.innerHTML = "2:30";

    window.time = 150;
    window.clockFunc = setInterval(() => {
        time -= 1;
        let convertMins = Math.floor(time / 60);
        let convertSecs = time % 60;
        if (convertSecs === 0) {
            clock.innerHTML = convertMins + " : " + convertSecs + "0";
        } else if (convertSecs < 10) {
            clock.innerHTML = convertMins + " : " + "0" + convertSecs;
        } 
        else {
            clock.innerHTML = convertMins + " : " + convertSecs;
        }
    }, 1000);

    gameView = new GameView(ctx);
    gameView.start();


    window.ctx = ctx;
});




/***/ }),

/***/ "./dist/src/moving_object.js":
/*!***********************************!*\
  !*** ./dist/src/moving_object.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.image = options.image;
    this.game = options.game;
    this.isWrappable = options.isWrappable;
    this.hp = options.hp;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    ctx.strokeStyle = "#f00"; // some color/style
    ctx.lineWidth = 2; // thickness
    ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
}

MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(this.pos)) {
        if (this.isWrappable) {
            this.pos = this.game.wrap(this.pos);
        } else if (!this.isWrappable && this.game.bullets.includes(this)) {
            this.game.removeBullet(this);
        }
    }
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    // let dist = Math.sqrt((this.pos[0] - 6 - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
    // return dist <= 30;
    let result = {true: "", right: "", left: "", down: "", up: ""}
    // let result;
    // let right;
    // let left;
    // let down;
    // let up;
    if (this.pos[0] < otherObject.pos[0] + otherObject.width &&
    this.pos[0] + this.width > otherObject.pos[0] &&
    this.pos[1] < otherObject.pos[1] + otherObject.height &&
    this.pos[1] + this.height > otherObject.pos[1])
    {
        result.true = true;
        result.right = this.pos[0] + this.width - otherObject.pos[0];
        result.left = this.pos[0] - (otherObject.pos[0] + otherObject.width);
        result.down = this.pos[1] + this.height - otherObject.pos[1]; 
        result.up = this.pos[1] - (otherObject.height + otherObject.pos[1]);
        return result;
    }

    // this.pos[1] < otherObject.pos[1] + otherObject.width &&
    //   this.pos[1] + this.width > otherObject.pos[1] &&
    //   this.pos[0] < otherObject.pos[0] + otherObject.height &&
    //   this.pos[0] + this.height > otherObject.pos[0];
}


module.exports = MovingObject;

/***/ }),

/***/ "./dist/src/scarecrow.js":
/*!*******************************!*\
  !*** ./dist/src/scarecrow.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(/*! ./moving_object */ "./dist/src/moving_object.js");
const Bullet = __webpack_require__(/*! ./bullet.js */ "./dist/src/bullet.js");
const Util = __webpack_require__(/*! ./utils.js */ "./dist/src/utils.js");

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

    // ctx.strokeStyle = "#f00"; // some color/style
    // ctx.lineWidth = 2; // thickness
    // ctx.strokeRect(this.pos[0], this.pos[1], this.width, this.height);
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
        if (rightPressed & !rightCollide) {
            this.game.scarecrow.pos[0] += 3;
        }
        else if (leftPressed && !leftCollide) {
            this.game.scarecrow.pos[0] -= 3;
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

//    if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) > 3 ) {
    if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.left) < Math.abs(result.down)) {
       
        leftCollide = true;
   } 
//    else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) <= 3 ) {
     else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.left) > Math.abs(result.down)) {
       console.log(result.left, result.down);
        leftCollide = false;
        console.log(leftCollide)
        console.log(leftPressed)
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

/***/ }),

/***/ "./dist/src/utils.js":
/*!***************************!*\
  !*** ./dist/src/utils.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const Util = {
    inherits(childClass, parentClass) {
        const Surrogate = function () { };
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    },

    determineDirection(lastPressed) {
        switch(lastPressed){
            case "left":
                return [-4, 0];
            case "right":
                return [4, 0];
            case "up":
                return [0, -4];
            case "down":
                return [0, 4];
            default: 
                return [4, 0];
        }
    }
}


module.exports = Util;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
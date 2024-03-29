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
    pos: options.pos,
    vel: [0, 0],
    width: 64,
    height: 64,
    image: angryImage,
    game: options.game,
    isWrappable: false
  });

  this.frameCount = 0;
  this.currentLoopIndex = 0;
  this.cycleLoop = [0, 64, 128, 192, 256, 320, 384, 448];
  // setInterval(() => {
  //     this.fireBullet();
  // }, 5000)
}

Util.inherits(AngryTower, MovingObject);

AngryTower.prototype.fireBullet = function() {
  // debugger;
    let rightBullet = new FatBullet({
      pos: [this.pos[0] + 25, this.pos[1]],
      vel: [1,0],
      game: this.game,
      isWrappable: false
    });
    let leftBullet = new FatBullet({
      pos: [this.pos[0] - 25, this.pos[1]],
      vel: [-1, 0],
      game: this.game,
      isWrappable: false
    });
    // this.game.bullets.concat([rightBullet, leftBullet]);
    this.game.bullets.push(leftBullet);
    this.game.bullets.push(rightBullet);
};



// const 

AngryTower.prototype.draw = function(ctx) {
  // let currentLoopIndex = 0;
  //mod not < etc 
  // class framecount vs constr
  this.frameCount++;
    if (this.frameCount % 6 === 0) {
        this.currentLoopIndex++;
        }

        if (this.frameCount % 250 === 0) {
          this.fireBullet();
        }
        

        ctx.drawImage(
        this.image,
        this.cycleLoop[this.currentLoopIndex],
        0,
        this.width,
        this.height,
        this.pos[0],
        this.pos[1],
        this.width / 2,
        this.height / 2
        );
        
        if (this.currentLoopIndex >= this.cycleLoop.length - 1) {
        this.currentLoopIndex = 0;

        // if (this.frameCount === 64) {
        //   this.frameCount = 0;
        // }
   
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
            image: options.image || bulletImage, 
            game: options.game, 
            isWrappable: options.isWrappable 
        });
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Corn) {
      if (otherObject.hp <= 780 ) {
          otherObject.hp += 20;
          // console.log(`corn hp is ${otherObject.hp}`);
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
cornImage.src = "./corn_late_FINAL.png";

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
const goodCrowImage = new Image ();
goodCrowImage.src = "crow_good.png";

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
            image: options.image || crowImage, 
            game: options.game, 
            isWrappable: true,
            hp: 80
        })
}

Util.inherits(Crow, MovingObject);

Crow.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Scarecrow) {
        otherObject.paralyze();
        // console.log("crow!!!!")
    } else if (otherObject instanceof Bullet) {
        if (this.hp <= 20 ) {
            // this.image.src = "crow_good.png";
            this.game.removeCrow(this);
            // let newCrow = 
        } else {
            this.game.removeBullet(otherObject);
            this.hp -= 20;
            // console.log(`bird hp is ${this.hp}`)
        }
    } else if (otherObject instanceof FatBullet) {
        if (this.hp <= 50 ) {
            this.game.removeCrow(this);
            this.game.removeBullet(this);
        } else {
            this.game.removeBullet(otherObject);
            this.hp -= 50;
            // console.log(`bird hp is ${this.hp}`)
        }
        // this.game.removeCrow(this);
    } else if (otherObject instanceof Corn) {
        if (otherObject.hp === 10) {
            // console.log("crow to corn")
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
    vel: options.vel,
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
      // console.log(`corn hp is ${otherObject.hp}`);
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
    this.frameCount ++;
    if (this.frameCount === 250 || this.frameCount % 750 === 0) {
        this.addCrows();
    }
        let pattern = ctx.createPattern(this.img, 'repeat');
        fieldPattern.src = "corn_field_later_2_single.png";
        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');
    
        //temp removal day to night changes
        // if (window.time >= 90) {
        //     this.img.src = "farmland_later_single.png";
        // }
        // if (window.time < 90) {
        //     this.img.src = "farmland_later_1.5_single.png";
        //     fieldPattern.src = "corn_field_later_2_single.png";
        // }
        // if (window.time < 60) {
        //     fieldPattern.src = "corn_field_later_3_single.png";
        // }
        // if (window.time < 30) {
        //     this.img.src = "farmland_later_4_single.png";
        //     fieldPattern.src = "corn_field_later_4_single.png";
        // }

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
        case 145: 
            velocity.push(Math.random() * 0.35 * this.sign());
            velocity.push(Math.random() * 0.35 * this.sign());
            break;
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
    let pauseSheet;
    let pauseText;
    switch(result) {
        case "win":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            window.paused = true;
            pauseSheet = document.getElementById("pause-sheet");
            pauseText = document.getElementById("paused-text");
            pauseText.innerHTML = "You win. Play again?";
            pauseSheet.classList.add("on");
            break;
        case "lose":
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            window.paused = true;
            pauseSheet = document.getElementById("pause-sheet");
            pauseText = document.getElementById("paused-text");
            pauseText.innerHTML = "You lose. Play again?"
            pauseSheet.classList.add("on");
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
    // this.game = new Game();
    this.game = new Game(this.ctx);
    // debugger;
    this.ctx = ctx;
    // this.clock = 
    // window.ctx = this.ctx;
}


GameView.prototype.start = function(){
    this.bindKeyHandlers();
    // this.game = new Game(this.ctx);
    // debugger;
    
    window.gameFunc = setInterval(() => {
        if (!window.paused){
            this.game.step(); 
            this.game.draw(this.ctx);
        }
    }, 20);
}


GameView.prototype.bindKeyHandlers = function () {
    key('space', () => { this.game.scarecrow.fireBullet() });
}

GameView.prototype.restart = function() {
    this.game.restart();
    this.start();
    // this.game = new Game ();
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
    
    //modals and start elements 
    const mainSheet = document.getElementById("main-content-sheet");
    document.addEventListener("click", navigate);
    const start = document.getElementById("start-button");
    const inventory = document.getElementById("inventory-off");
    const bars = document.getElementById("bars-off");
    const clock = document.getElementById("clock");

    
    
    function navigate (e) {
        if (e.target === start) { 
          startGame();
        }
    }

    function startGame() {
      //instructions + HUD
      mainSheet.id = "main-content-sheet-off";
      bars.id = "bars";
      inventory.id = "inventory";


      //clock
      clearInterval(window.clockFunc);
      clearInterval(window.gameFunc);
      clock.innerHTML = "2:30";
      clock.classList.add("on");
      window.time = 150;
      window.clockFunc = setInterval(countdown, 1000);
      const pauseSheet = document.getElementById("pause-sheet");
      
      //test
      //preview grid 
      const grid = document.getElementById("preview-grid-off") || document.getElementById("preview-grid");
      grid.id = "preview-grid";

      // let ctx = canvas.getContext("2d");
      // ctx.imageSmoothingEnabled = false;
      //game start 
      // gameView = new GameView(ctx);

      // gameView.game = new 
      // gameView.restart();
      gameView = new GameView(ctx);
      gameView.start();
      //unpause 
      window.paused = false;
      pauseSheet.classList.remove("on");
    }

    window.paused;

    document.addEventListener("keydown", pause);
    const restartButton = document.getElementById("restart-button")
    restartButton.addEventListener("click", restart);
    
    function pause(e) {
        const pauseSheet = document.getElementById("pause-sheet");
        if (e.key === "p" || e.key === "P") {
            if (!window.paused) {
                window.paused = true; 
                pauseSheet.classList.add("on");
            } else if (window.paused) {
                window.paused = false;
                pauseSheet.classList.remove("on");
            }
        }
    }

    function countdown(){
        if (!window.paused) {
          time -= 1;
          let convertMins = Math.floor(time / 60);
          let convertSecs = time % 60;
          if (convertSecs === 0) {
            clock.innerHTML = convertMins + " : " + convertSecs + "0";
          } else if (convertSecs < 10) {
            clock.innerHTML = convertMins + " : " + "0" + convertSecs;
          } else {
            clock.innerHTML = convertMins + " : " + convertSecs;
          }
        }
    }

    function restart(e) {
      // document.removeEventListener("click", gameView.game.build);
      // document.removeEventListener("mousemove", gameView.game.highlight);
      // startGame();
      mainSheet.id = "main-content-sheet-off";
      bars.id = "bars";
      inventory.id = "inventory";

      clearInterval(window.clockFunc);
      clearInterval(window.gameFunc);
      clock.innerHTML = "2:30";
      clock.classList.add("on");
      window.time = 150;
      window.clockFunc = setInterval(countdown, 1000);
      const pauseSheet = document.getElementById("pause-sheet");
      const winSheet = document.getElementById("win-sheet-on") || document.getElementById("win-sheet");
      const loseSheet = document.getElementById("lose-sheet-on") || document.getElementById("lose-sheet");
      winSheet.id = "win-sheet";
      loseSheet.id = "lose-sheet";


      const grid =
      document.getElementById("preview-grid-off") ||
      document.getElementById("preview-grid");
      grid.id = "preview-grid";

      gameView.restart();

      window.paused = false;
      pauseSheet.classList.remove("on");
    }

    window.restart = restart;
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
    let result = {true: "", right: "", left: "", down: "", up: ""}

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
scarecrowImage.src = "scarecrow_flying_OPT.png";
const blueBullet = new Image();
blueBullet.src = "blue_heart.png";
const superBullet = new Image();
superBullet.src = "super_heart.png";

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
        this.spooked = false;
        this.fear = 0;
        this.courage = 0;
   
}

Util.inherits(Scarecrow, MovingObject);

Scarecrow.prototype.fireBullet = function() {
    // debugger;
    if (!this.spooked){
    if (frameCount < 6) {
        return;
    }

    let bullet;
    if (this.courage >= 40) {
        let vel1 = Util.determineDirection(lastPressed);
        let vel2 = [vel1[0] * -1, vel1[1] * -1];

        bullet = new Bullet({
          pos: [this.pos[0] + 25, this.pos[1] + 10],
          vel: vel1,
          game: this.game,
          isWrappable: true,
          image: superBullet
        });
        bullet2 = new Bullet({
          pos: [this.pos[0] + 25, this.pos[1] + 10],
          vel: vel2,
          game: this.game,
          isWrappable: true,
          image: superBullet
        });
        this.game.bullets.push(bullet2);
    }
    else if (this.fear < 50) {

        bullet = new Bullet({ 
            pos: [this.pos[0] + 25, this.pos[1] + 10], 
            vel: Util.determineDirection(lastPressed), 
            game: this.game, 
            isWrappable: false 
        });
    } else {
        bullet = new Bullet({
            pos: [this.pos[0] + 25, this.pos[1] + 10],
            vel: Util.determineDirection(lastPressed),
            game: this.game,
            image: blueBullet,
            isWrappable: false
        });
    }
        this.game.bullets.push(bullet);
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

Scarecrow.prototype.draw = function (ctx) {
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
    if (this.fear >= 50){
        let frightenedImage = new Image();
        frightenedImage.src = "scarecrow_frightened.png";
        setTimeout(() => {
          this.fear = 0;
          gauge = document.getElementById("fear-color");
          gauge.style.width = "0px";
        }, 10000);
        return ctx.drawImage(
            frightenedImage,
            0,
            0,
            64,
            64,
            this.pos[0], 
            this.pos[1], 
            this.width, 
            this.height
        ) 
    }
    if (this.courage >= 40) {
        scarecrowImage.src = "super_scarecrow.png";
        setTimeout(() => {
            this.courage = 0;
            gauge = document.getElementById("courage-color");
            gauge.style.width = "0px";
            scarecrowImage.src = "scarecrow_flying_OPT.png";
        }, 15000); 
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
        if (rightPressed & !rightCollide) {
            if (this.fear < 50 && this.courage < 40){
                this.game.scarecrow.pos[0] += 3;
            } else if (this.courage >= 40){
                this.game.scarecrow.pos[0] += 9;
            } else {
                this.game.scarecrow.pos[0] += 0.5;
            }
        }
        else if (leftPressed && !leftCollide) {
            if (this.fear < 50 && this.courage < 40) {
              this.game.scarecrow.pos[0] -= 3;
            } else if (this.courage >= 40) {
              this.game.scarecrow.pos[0] -= 9;
            } else {
              this.game.scarecrow.pos[0] -= 0.5;
            }
        } else if (downPressed && !downCollide) {
            if (this.fear < 50 && this.courage < 40) {
              this.game.scarecrow.pos[1] += 3;
            } else if (this.courage >= 40) {
              this.game.scarecrow.pos[1] += 9;
            } else {
              this.game.scarecrow.pos[1] += 0.5;
            }
        } else if (upPressed && !upCollide) {
            if (this.fear < 50 && this.courage < 40) {
              this.game.scarecrow.pos[1] -= 3;
            } else if (this.courage >= 40) {
              this.game.scarecrow.pos[1] -= 9;
            } else {
              this.game.scarecrow.pos[1] -= 0.5;
            }
        } else if (spacebarPressed) {
            this.game.scarecrow.fireBullet();
        }
    // }
}    

Scarecrow.prototype.paralyze = function() {
    if (this.fear < 50 && this.courage < 40){
        this.spooked = true;
        setTimeout(() => {
            this.spooked = false;
            this.fear += .15;
        }, 3000);
        gauge = document.getElementById("fear-color");
        pixels = (((this.fear + .15)/50) * 350);
        gauge.style.width = `${pixels}px`;
    }
}

Scarecrow.prototype.collideWith = function(movingObject, result) {

    if (this.courage < 40) {

        //    if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) > 3 ) {
            if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) > 3) {
                leftCollide = true;
            } 
            //    else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) <= 3 ) {
                else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.down) <= 3) {
                    leftCollide = false;
                }
                else if (leftPressed && Math.abs(result.left) <= 3 && Math.abs(result.up) > 3 ) {
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
                else if (rightPressed && Math.abs(result.right) <= 3  && Math.abs(result.up) >=3 ) {
                    rightCollide = true;
                }
                else if (rightPressed && Math.abs(result.right) <= 3 && Math.abs(result.up) < 3 ) {
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
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Corn = __webpack_require__(/*! ./corn.js */ \"./src/corn.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst bulletImage = new Image ();\nbulletImage.src = \"../dist/bullet.png\"\n\nfunction Bullet(options) {\n    MovingObject.call(this, \n        { \n            pos: options.pos, \n            vel: options.vel, \n            height: 30, \n            width: 30, \n            image: bulletImage, \n            game: options.game, \n            isWrappable: options.isWrappable \n        });\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Corn) {\n      if (otherObject.hp <= 780 ) {\n          otherObject.hp += 20;\n          console.log(`corn hp is ${otherObject.hp}`);\n        }\n    this.game.removeBullet(this);\n  } \n};\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/corn.js":
/*!*********************!*\
  !*** ./src/corn.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst cornImage = new Image();\n\ncornImage.src = \"../dist/corn_late.png\";\n\nfunction Corn(options) {\n    MovingObject.call(this, \n        { \n            pos: options.pos, \n            vel: [0, 0], \n            height: 30, \n            width: 30, \n            image: cornImage, \n            game: options.game, \n            isWrappable: false,\n            hp: 800 \n        })\n}\n\nUtil.inherits(Corn, MovingObject);\n\nmodule.exports = Corn;\n\n\n\n//# sourceURL=webpack:///./src/corn.js?");

/***/ }),

/***/ "./src/crow.js":
/*!*********************!*\
  !*** ./src/crow.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Scarecrow = __webpack_require__(/*! ./scarecrow.js */ \"./src/scarecrow.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Corn = __webpack_require__(/*! ./corn.js */ \"./src/corn.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nconst crowImage = new Image ();\ncrowImage.src = \"../dist/crow_bad_OPT.png\";\nconst CONSTANTS = {\n    MAX_X: 10,\n    MAX_Y: 10,\n};\n\nfunction Crow(options) {\n    MovingObject.call(this, \n        { \n            pos: options.pos, \n            vel: options.vel, \n            width: 30, \n            height: 30, \n            image: crowImage, \n            game: options.game, \n            isWrappable: true,\n            hp: 80\n        })\n}\n\nUtil.inherits(Crow, MovingObject);\n\nCrow.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Scarecrow) {\n        otherObject.paralyze();\n        console.log(\"crow!!!!\")\n    } else if (otherObject instanceof Bullet) {\n        if (this.hp === 10 ) {\n            this.game.removeCrow(this);\n        } else {\n            this.game.removeBullet(otherObject);\n            this.hp -= 10;\n            console.log(`bird hp is ${this.hp}`)\n        }\n        // this.game.removeCrow(this);\n    } else if (otherObject instanceof Corn) {\n        if (otherObject.hp === 10) {\n            this.game.gameMap[otherObject.pos[1]/40][otherObject.pos[0]/40] = 0;\n            this.game.removeCorn(otherObject);\n        } else {\n            otherObject.hp -= 10;\n        }\n    }\n}\n\nmodule.exports = Crow; \n\n//# sourceURL=webpack:///./src/crow.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Crow = __webpack_require__(/*! ./crow.js */ \"./src/crow.js\");\nconst Scarecrow = __webpack_require__(/*! ./scarecrow.js */ \"./src/scarecrow.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Corn = __webpack_require__(/*! ./corn.js */ \"./src/corn.js\");\n\nconst CONSTANTS = {\n    DIM_X: 800,\n    DIM_Y: 400,\n    CORN_X: 280,\n    CORN_Y: 120,\n    VEL_X: 2,\n    VEL_Y: 2,\n    NUM_CROWS: 100,\n    //NUM_CROWS: 13 seems fine for difficulty\n    NUM_CORNS: 1\n};\n\nconst tileWidth = 40, tileHeight = 40;\nconst mapWidth = 20, mapHeight = 10;\n\nconst gameMap = [\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n]\n\n\nfunction Game() {\n    this.crows = [];\n    this.bullets = [];\n    this.corns = [];\n    this.scarecrow = new Scarecrow({ game: this });\n    this.addCrows();\n    this.addCorns();\n    this.img = new Image();\n    this.img.src = \"farmland_later_single.png\";\n    this.gameMap = gameMap;\n    // setInterval(() => {\n    //     console.log(this);\n    // }, 3000)\n}\n\nGame.prototype.draw = function (ctx) {\n        let pattern = ctx.createPattern(this.img, 'repeat');\n        let fieldPattern = new Image();\n        fieldPattern.src = \"corn_field_later_single.png\";\n        let pattern2 = ctx.createPattern(fieldPattern, 'repeat');\n    \n        for(let row = 0; row < 10; row ++ ) {\n            for(let col = 0; col < 20; col ++) {\n                switch(gameMap[row][col]){\n                case 0: \n                    ctx.fillStyle = pattern;\n                    break;\n                default: \n                    ctx.fillStyle = pattern2;\n            }\n            ctx.fillRect(col*tileWidth, row*tileHeight, tileWidth, tileHeight);\n        }\n    }\n    this.allObjects().forEach(movingObj => movingObj.draw(ctx));\n}\n\nGame.prototype.addCrows = function () {\n    while (this.crows.length < CONSTANTS.NUM_CROWS) {\n        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))\n    }\n}\n\nGame.prototype.addCorns = function () {\n    for (let row = 0; row < 10; row++) {\n        for (let col = 0; col < 20; col++) {\n            switch (gameMap[row][col]) {\n                case 1:\n                    this.corns.push(new Corn({ pos: [col * 40, row * 40], game: this}))\n                    break;\n            }\n        }\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    let position = [];\n    position.push(Math.floor(Math.random() * CONSTANTS.DIM_X));\n    position.push(Math.floor(Math.random() * CONSTANTS.DIM_Y));\n    return position;\n}\n\n\nGame.prototype.randomVelocity = function () {\n    let velocity = [];\n    velocity.push(Math.ceil(Math.random() * CONSTANTS.VEL_X));\n    velocity.push(Math.ceil(Math.random() * CONSTANTS.VEL_Y));\n    return velocity;\n}\n\nGame.prototype.allObjects = function () {\n    return this.crows\n    .concat(this.scarecrow, this.bullets, this.corns);\n}\n\n\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach(movingObj => movingObj.move());\n}\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] > CONSTANTS.DIM_X) {\n        pos[0] = 0;\n    } else if (pos[0] < 0) {\n        pos[0] = CONSTANTS.DIM_X;\n    }\n\n    if (pos[1] > CONSTANTS.DIM_Y) {\n        pos[1] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = CONSTANTS.DIM_Y;\n    }\n\n    return pos;\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return pos[0] > CONSTANTS.DIM_X || pos[0] < 0 || pos[1] > CONSTANTS.DIM_Y || pos[1] < 0;\n}\n\nGame.prototype.checkCollisions = function () {\n    this.allObjects().forEach((movingObj, i) => {\n        this.allObjects().forEach((movingObj2, j) => {\n            if (i !== j && movingObj.isCollidedWith(movingObj2)){\n                if (movingObj instanceof Crow && movingObj2 instanceof Scarecrow ) {\n                    movingObj.collideWith(movingObj2)\n                } else if (movingObj instanceof Crow && movingObj2 instanceof Bullet ) {\n                    movingObj.collideWith(movingObj2)\n                } \n                else if (movingObj instanceof Crow && movingObj2 instanceof Corn) {\n                    movingObj.collideWith(movingObj2)\n                }\n                else if (movingObj instanceof Scarecrow && movingObj2 instanceof Corn) {\n                    movingObj.collideWith(movingObj2);\n                } else if (movingObj instanceof Bullet && movingObj2 instanceof Corn) {\n                    movingObj.collideWith(movingObj2);\n                }\n            }\n        });\n    });\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n    let result = this.didLose();\n    if (result){\n        this.end(\"lose\");\n    } else if (window.time === 0) {\n        this.end(\"win\");\n    }\n}\n\nGame.prototype.removeCrow = function(movingObj) {\n    let idx = this.crows.indexOf(movingObj);\n    this.crows.splice(idx,1);\n}\n\nGame.prototype.removeBullet = function (movingObj) {\n    let idx = this.bullets.indexOf(movingObj);\n    this.bullets.splice(idx, 1);\n}\n\nGame.prototype.removeCorn = function (movingObj) {\n    let idx = this.corns.indexOf(movingObj);\n    this.corns.splice(idx, 1);\n}\n\nGame.prototype.didLose = function() {\n    debugger;\n  if (this.corns.length === 0) {\n    return true;\n  } else {\n    return false;\n  }\n};\n\nGame.prototype.end = function(result) {\n    debugger;\n    switch(result) {\n        case \"win\":\n            clearInterval(window.clockFunc);\n            clearInterval(window.gameFunc);\n            console.log(\"win\");\n            break;\n        case \"lose\":\n            clearInterval(window.clockFunc);\n            clearInterval(window.gameFunc);\n            console.log(\"lose\");\n            break;\n  }\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\"); \n\n\nfunction GameView (ctx) {\n    this.game = new Game;\n    this.ctx = ctx;\n}\n\n\nGameView.prototype.start = function(){\n    this.bindKeyHandlers();\n    \n    window.gameFunc = setInterval(() => {\n        this.game.step(); \n        this.game.draw(this.ctx);\n    }, 20);\n}\n\n\nGameView.prototype.bindKeyHandlers = function () {\n    key('space', () => { this.game.scarecrow.fireBullet() });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Crow = __webpack_require__(/*! ./crow.js */ \"./src/crow.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"scarecrow-canvas\");\n    const ctx = canvas.getContext('2d');\n    ctx.imageSmoothingEnabled = false;\n\n   window.clock = document.getElementById(\"clock\");\n   clock.innerHTML = \"2:30\";\n\n    window.time = 150;\n    window.clockFunc = setInterval(() => {\n        time -= 1;\n        let convertMins = Math.floor(time / 60);\n        let convertSecs = time % 60;\n        debugger;\n        if (convertSecs === 0) {\n            clock.innerHTML = convertMins + \" : \" + convertSecs + \"0\";\n        } else if (convertSecs < 10) {\n            clock.innerHTML = convertMins + \" : \" + \"0\" + convertSecs;\n        } \n        else {\n            clock.innerHTML = convertMins + \" : \" + convertSecs;\n        }\n    }, 1000);\n\n    gameView = new GameView(ctx);\n    gameView.start();\n\n\n    window.ctx = ctx;\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.width = options.width;\n    this.height = options.height;\n    this.image = options.image;\n    this.game = options.game;\n    this.isWrappable = options.isWrappable;\n    this.hp = options.hp;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);\n}\n\nMovingObject.prototype.move = function () {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    if (this.game.isOutOfBounds(this.pos)) {\n        if (this.isWrappable) {\n            this.pos = this.game.wrap(this.pos);\n        } else if (!this.isWrappable && this.game.bullets.includes(this)) {\n            this.game.removeBullet(this);\n        }\n    }\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let dist = Math.sqrt((this.pos[0] - 6 - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n    return dist <= 30;\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/scarecrow.js":
/*!**************************!*\
  !*** ./src/scarecrow.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst scarecrowImage = new Image ();\nscarecrowImage.src = \"../dist/scarecrow_flying_wide.png\";\n\nfunction Scarecrow(options) {\n    MovingObject.call(this, \n        { \n            pos: [100, 100], \n            vel: [0, 0], \n            width: 60, \n            height: 60, \n            image: scarecrowImage, \n            game: options.game, \n            isWrappable: true, \n\n        });\n        this.spooked = false\n   \n}\n\nUtil.inherits(Scarecrow, MovingObject);\n\nScarecrow.prototype.fireBullet = function() {\n    // debugger;\n    if (!this.spooked){\n    if (frameCount < 6) {\n        return;\n    }\n\n    let bullet = new Bullet({ \n        pos: [this.pos[0] + 25, this.pos[1] + 10], \n        vel: Util.determineDirection(lastPressed), \n        game: this.game, \n        isWrappable: false \n    });\n    this.game.bullets.push(bullet);\n    bulletFrameCount = 0;\n}\n}\n\nlet rightPressed = false;\nlet leftPressed = false;\nlet upPressed = false;\nlet downPressed = false;\nlet spacebarPressed = false;\nlet lastPressed = \"\";\n\nlet leftCollide;\nlet rightCollide;\nlet upCollide;\nlet downCollide;\n\nconst cycleLoop = [\n    0, \n    64, \n    128, \n    192, \n    256, \n    320, \n    384, \n    448, \n    512, \n    576\n];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\n\nScarecrow.prototype.draw = function () {\n    frameCount ++;\n\n    if (!this.spooked){\n        this.scareMove();\n    }\n    leftCollide = false;\n    rightCollide = false;\n    upCollide = false;\n    downCollide = false;\n    if (this.spooked) {\n        let spookedImage = new Image();\n        spookedImage.src = \"../dist/scarecrow_spooked_FINAL.png\";\n        return ctx.drawImage(\n            spookedImage, \n            0, \n            0, \n            62, \n            62,\n            this.pos[0], \n            this.pos[1], \n            this.width / 1.7, \n            this.height / 1.7\n        )\n    }\n    if (frameCount < 6){\n        return ctx.drawImage(\n            this.image, \n            cycleLoop[currentLoopIndex], \n            0, \n            this.width, \n            this.height, \n            this.pos[0], \n            this.pos[1], \n            this.width, \n            this.height\n        )\n    }\n    frameCount = 0;\n\n    ctx.drawImage(\n        this.image, \n        cycleLoop[currentLoopIndex], \n        0, \n        this.width, \n        this.height, \n        this.pos[0], \n        this.pos[1], \n        this.width, \n        this.height\n    );\n    currentLoopIndex++;\n    if (currentLoopIndex >= cycleLoop.length) {\n        currentLoopIndex = 0;\n    }\n}\n\n\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\n\n\nfunction keyDownHandler(e) {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\" || e.key == \"d\") {\n        rightPressed = true;\n        lastPressed = \"right\";\n    }\n    else if (e.key == \"Left\" || e.key == \"ArrowLeft\" || e.key == \"a\") {\n        leftPressed = true;\n        lastPressed = \"left\";\n    }\n    else if (e.key == \"Up\" || e.key == \"ArrowUp\" || e.key == \"w\") {\n        upPressed = true;\n        lastPressed = \"up\";\n    }\n    else if (e.key == \"Down\" || e.key == \"ArrowDown\" || e.key == \"s\") {\n        downPressed = true;\n        lastPressed = \"down\";\n    }\n    else if (e.key == \" \" || e.key == \"Spacebar\") {\n        spacebarPressed = true;\n    }\n}\n\nfunction keyUpHandler(e) {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\" || e.key == \"d\") {\n        rightPressed = false;\n    }\n    else if (e.key == \"Left\" || e.key == \"ArrowLeft\" || e.key == \"a\") {\n        leftPressed = false;\n    }\n    else if (e.key == \"Up\" || e.key == \"ArrowUp\" || e.key == \"w\") {\n        upPressed = false;\n    }\n    else if (e.key == \"Down\" || e.key == \"ArrowDown\" || e.key == \"s\") {\n        downPressed = false;\n    }\n    else if (e.key == \" \" || e.key == \"Spacebar\") {\n        spacebarPressed = false;\n    }\n}\n\n// Scarecrow.prototype.scareMove = function () {\n//     if (rightPressed) {\n//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1 ) {\n//             this.game.scarecrow.pos[0] += 3;\n//         } else {\n//             this.game.scarecrow.pos[0] -= 9;\n//             console.log(`uh oh no right ${this.pos[0]}`)\n//         }\n//     } else if (leftPressed) {\n//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {\n//             this.game.scarecrow.pos[0] -= 3;\n//         } else {\n//             this.game.scarecrow.pos[0] += 12;\n//             console.log(`uh oh no left ${this.pos[0]}`)\n//         }\n//         // this.game.scarecrow.pos[0] -= 3;\n\n//     } else if (upPressed) {\n//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40) - 1][Math.floor(this.pos[0] / 40) + 1] !== 1){\n//             this.game.scarecrow.pos[1] -= 3;\n//         } else {\n//             this.game.scarecrow.pos[1] += 12;\n//             console.log(`uh oh no up ${this.pos[1]}`)\n//         }\n//     } else if (downPressed) {\n//         if (this.game.gameMap[Math.ceil(this.pos[1] / 40)][Math.floor(this.pos[0] / 40) + 1] !== 1) {\n//             this.game.scarecrow.pos[1] += 3;\n//         } else {\n//             this.game.scarecrow.pos[1] -= 9;\n//             console.log(`uh oh no down ${this.pos[1]}`)\n//         }\n//     }\n//      else if (spacebarPressed) {\n//         this.game.scarecrow.fireBullet();\n//     }\n// }\n\n\nScarecrow.prototype.scareMove = function() {\n    // let mapState = this.game.gameMap[Math.ceil(this.pos[0]/40) - 1][Math.ceil(this.pos[1]/40) - 1]\n    // // debugger;\n    // while (!mapState === 1){\n        if (rightPressed) {\n            if (!rightCollide) {\n                this.game.scarecrow.pos[0] += 3;\n            // } else if (rightCollide) {\n            //     this.game.scarecrow.pos[0] += 0;\n            }\n            // this.game.scarecrow.pos[0] += 3;\n        } else if (leftPressed && !leftCollide) {\n            this.game.scarecrow.pos[0] -= 3;\n            // if (!leftCollide){\n            //     this.game.scarecrow.pos[0] -= 3;\n            // } else {\n            //     this.game.scarecrow.pos[0] += 0;\n            // }\n        } else if (downPressed && !downCollide) {\n            this.game.scarecrow.pos[1] += 3;\n        } else if (upPressed && !upCollide) {\n            this.game.scarecrow.pos[1] -= 3;\n        } else if (spacebarPressed) {\n            this.game.scarecrow.fireBullet();\n        }\n    // }\n}    \n\nScarecrow.prototype.paralyze = function() {\n    this.spooked = true;\n    setTimeout(() => {\n        this.spooked = false;\n    }, 3500);\n}\n\nScarecrow.prototype.collideWith = function(movingObject) {\n   if (leftPressed) {\n       leftCollide = true;\n       console.log(\"left\")\n   } \n   else if (rightPressed) {\n       console.log (\"right\");\n       rightCollide = true;\n   }\n   else if (upPressed) {\n       console.log(\"up\")\n       upCollide = true;\n   }\n   else if (downPressed) {\n       console.log(\"down\");\n       downCollide = true;\n   }\n    // return true;\n}\n// Scarecrow.prototype.collideWith = function (movingObject) {\n//     if (this.pos[0] - movingObject.pos[0] < 0) {\n        \n//         rightPressed = false;\n//     }\n//     else if (this.pos[0] - movingObject.pos[0] === 0) {\n//         debugger;\n//         leftPressed = false;\n//     }\n//     else if (this.pos[1] - movingObject.pos[1] > 0) {\n//         debugger;\n//         upPressed = false;\n//     }\n//     else if (this.pos[1] - movingObject.pos[1] < 0) {\n//         debugger;\n//         downPressed = false;\n//     }\n    // if (this.pos[0] - movingObject.pos[0] < 0) {\n    //     debugger;\n    //     this.pos[0] = movingObject.pos[0];\n    // }\n\n\nmodule.exports = Scarecrow;\n\n//# sourceURL=webpack:///./src/scarecrow.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        const Surrogate = function () { };\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    determineDirection(lastPressed) {\n        switch(lastPressed){\n            case \"left\":\n                return [-4, 0];\n            case \"right\":\n                return [4, 0];\n            case \"up\":\n                return [0, -4];\n            case \"down\":\n                return [0, 4];\n            default: \n                return [4, 0];\n        }\n    }\n}\n\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
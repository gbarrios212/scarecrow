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

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst bulletImage = new Image ();\nbulletImage.src = \"../dist/bullet.png\"\n\nfunction Bullet(options) {\n    MovingObject.call(this, { pos: options.pos, vel: options.vel, height: 30, width: 30, image: bulletImage, game: options.game, isWrappable: options.isWrappable });\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/corn.js":
/*!*********************!*\
  !*** ./src/corn.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst cornImage = new Image();\ncornImage.src = \"../dist/corn0.png\";\n\nfunction Corn(options) {\n    MovingObject.call(this, { pos: options.pos, vel: [0, 0], height: 45, width: 45, image: cornImage, game: options.game, isWrappable: false })\n}\n\nUtil.inherits(Corn, MovingObject);\n\nmodule.exports = Corn;\n\n\n\n//# sourceURL=webpack:///./src/corn.js?");

/***/ }),

/***/ "./src/crow.js":
/*!*********************!*\
  !*** ./src/crow.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Scarecrow = __webpack_require__(/*! ./scarecrow.js */ \"./src/scarecrow.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Corn = __webpack_require__(/*! ./corn.js */ \"./src/corn.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nconst crowImage = new Image ();\ncrowImage.src = \"../dist/crow0.png\";\n\nconst CONSTANTS = {\n    MAX_X: 10,\n    MAX_Y: 10,\n};\n\nfunction Crow(options) {\n    MovingObject.call(this, { pos: options.pos, vel: options.vel, width: 60, height: 60, image: crowImage, game: options.game, isWrappable: true })\n}\n\nUtil.inherits(Crow, MovingObject);\n\nCrow.prototype.collideWith = function (otherObject) {\n    if (otherObject instanceof Scarecrow) {\n        otherObject.relocate();\n    } else if (otherObject instanceof Bullet) {\n        this.game.removeCrow(this);\n        this.game.removeBullet(otherObject);\n    } else if (otherObject instanceof Corn) {\n        this.game.removeCorn(otherObject);\n    }\n}\n\nmodule.exports = Crow; \n\n//# sourceURL=webpack:///./src/crow.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Crow = __webpack_require__(/*! ./crow.js */ \"./src/crow.js\");\nconst Scarecrow = __webpack_require__(/*! ./scarecrow.js */ \"./src/scarecrow.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Corn = __webpack_require__(/*! ./corn.js */ \"./src/corn.js\");\n\nconst CONSTANTS = {\n    DIM_X: 700,\n    DIM_Y: 450,\n    VEL_X: 10,\n    VEL_Y: 10,\n    NUM_CROWS: 10,\n    NUM_CORNS: 10\n};\n\nfunction Game() {\n    this.crows = [];\n    this.bullets = [];\n    this.corns = [];\n    this.scarecrow = new Scarecrow({ game: this });\n    this.addCrows();\n    this.addCorns();\n    this.img = new Image();\n    this.img.src = \"green-stuff.jpg\";\n}\n\n// Game.prototype.allObjects = function(){\n//     returi\n// }\n\nGame.prototype.addCrows = function () {\n    while (this.crows.length < CONSTANTS.NUM_CROWS) {\n        this.crows.push(new Crow({ pos: this.randomPosition(), vel: this.randomVelocity(), game: this}))\n    }\n}\n\nGame.prototype.addCorns = function () {\n    while (this.corns.length < CONSTANTS.NUM_CORNS) {\n        this.corns.push(new Corn({ pos: this.randomPosition(), game: this }))\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    let position = [];\n    position.push(Math.floor(Math.random() * CONSTANTS.DIM_X));\n    position.push(Math.floor(Math.random() * CONSTANTS.DIM_Y));\n    return position;\n}\n\n\nGame.prototype.randomVelocity = function () {\n    let velocity = [];\n    velocity.push(Math.floor(Math.random() * CONSTANTS.VEL_X));\n    velocity.push(Math.floor(Math.random() * CONSTANTS.VEL_Y));\n    return velocity;\n}\n\nGame.prototype.allObjects = function () {\n    return this.crows\n    .concat(this.scarecrow, this.bullets, this.corns);\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, CONSTANTS.DIM_X, CONSTANTS.DIM_Y);\n    ctx.drawImage(this.img, 0, 0, 1200, 800);\n    this.allObjects().forEach(movingObj => movingObj.draw(ctx));\n}\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach(movingObj => movingObj.move());\n}\n\nGame.prototype.wrap = function (pos) {\n    if (pos[0] > CONSTANTS.DIM_X) {\n        pos[0] = 0;\n    } else if (pos[0] < 0) {\n        pos[0] = CONSTANTS.DIM_X;\n    }\n\n    if (pos[1] > CONSTANTS.DIM_Y) {\n        pos[1] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = CONSTANTS.DIM_Y;\n    }\n\n    return pos;\n}\n\nGame.prototype.isOutOfBounds = function (pos) {\n    return pos[0] > CONSTANTS.DIM_X || pos[0] < 0 || pos[1] > CONSTANTS.DIM_Y || pos[1] < 0;\n}\n\nGame.prototype.checkCollisions = function () {\n    this.allObjects().forEach((movingObj, i) => {\n        this.allObjects().forEach((movingObj2, j) => {\n            if (i !== j && movingObj.isCollidedWith(movingObj2)){\n                if (movingObj instanceof Crow && movingObj2 instanceof Scarecrow ) {\n                    movingObj.collideWith(movingObj2)\n                } else if (movingObj instanceof Bullet && movingObj2 instanceof Crow ) {\n                    movingObj2.collideWith(movingObj)\n                } \n                else if (movingObj instanceof Crow && movingObj2 instanceof Corn) {\n                    movingObj.collideWith(movingObj2)\n                }\n            }\n        });\n    });\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.removeCrow = function(movingObj) {\n    let idx = this.crows.indexOf(movingObj);\n    this.crows.splice(idx,1);\n}\n\nGame.prototype.removeBullet = function (movingObj) {\n    let idx = this.bullets.indexOf(movingObj);\n    this.bullets.splice(idx, 1);\n}\n\nGame.prototype.removeCorn = function (movingObj) {\n    let idx = this.corns.indexOf(movingObj);\n    this.corns.splice(idx, 1);\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\"); \n\nconst CONSTANTS = {\n    POWER: 1\n};\n\nfunction GameView (ctx) {\n    this.game = new Game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    this.bindKeyHandlers();\n    setInterval(() => {\n        // this.game.moveObjects();\n        this.game.step();\n        this.game.draw(this.ctx);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function () {\n    // key('w', () => { this.game.scarecrow.power([0, -CONSTANTS.POWER]) });\n    // key('a', () => { this.game.scarecrow.power([-CONSTANTS.POWER, 0]) });\n    // key('s', () => { this.game.scarecrow.power([0, CONSTANTS.POWER]) });\n    // key('d', () => { this.game.scarecrow.power([CONSTANTS.POWER, 0]) });\n    key('w', () => { this.game.scarecrow.vel = [0, -3] });\n    key('a', () => { this.game.scarecrow.vel = [-3, 0] });\n    key('s', () => { this.game.scarecrow.vel = [0, 3] });\n    key('d', () => { this.game.scarecrow.vel = [3, 0] });\n    key('space', () => { this.game.scarecrow.fireBullet() });\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Crow = __webpack_require__(/*! ./crow.js */ \"./src/crow.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n// window.MovingObject = MovingObject;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"scarecrow-canvas\");\n    const ctx = canvas.getContext('2d');\n    // canvas.setAttribute('width', window.innerWidth);\n    // canvas.setAttribute('height', window.innerHeight);\n    ctx.imageSmoothingEnabled = false;\n    // ctx.fillStyle = \"gray\";\n    // ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    gameView = new GameView(ctx);\n    gameView.start();\n    //for test\n    window.Crow = Crow;\n    window.ctx = ctx;\n    // co = new Crow ({pos:[100, 100]});\n    // co.draw(ctx);\n    //for test \n\n    var scare = new Image();\n    scare.src = \"../dist/scarecrow03.png\"\n    var crow = new Image();\n    crow.src = \"../dist/crow0.png\";\n    var corn = new Image();\n    corn.src = \"../dist/corn0.png\";\n    // const crow = document.getElementById(\"crow\");\n    // const corn = document.getElementById(\"corn\");\n    // const scare = document.getElementById(\"scare\");\n    // ctx.drawImage(scare, 300, 30, 80, 80);\n    // ctx.drawImage (crow, 10, 20, 80, 80);\n    // ctx.drawImage(corn, 10, 100, 80, 80);\n    // ctx.drawImage(corn, 10, 200, 80, 80);\n    // ctx.drawImage(corn, 10, 300, 80, 80);\n    // ctx.drawImage(corn, 100, 100, 80, 80);\n    // ctx.drawImage(corn, 100, 200, 80, 80);\n    // ctx.drawImage(corn, 100, 300, 80, 80);\n    // const Janice2 = new GameView(ctx);\n    // Janice2.start();\n});\n\n//want to draw and move and draw and move \n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.width = options.width;\n    this.height = options.height;\n    this.image = options.image;\n    this.game = options.game;\n    this.isWrappable = options.isWrappable;\n}\n\n//mo.draw(ctx)\n//ctx is the canvas 2d rendering context \n// mo is the moving objext\n// draw is the function that take sin canvas as an arg and creates a circle \n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);\n}\n\nMovingObject.prototype.move = function () {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    if (this.game.isOutOfBounds(this.pos)) {\n        if (this.isWrappable) {\n            this.pos = this.game.wrap(this.pos);\n        } else {\n            this.game.removeBullet(this);\n        }\n    }\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let dist = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n    // fine for crow to scarecrow; too big for heart  \n    // return dist <= 40;\n    return dist <= 30;\n    // return true;\n}\n\nMovingObject.prototype.relocate = function(){\n    this.pos = [this.pos[0] + Math.floor(Math.random() * 100), this.pos[1] + Math.floor(Math.random() * 100)];\n    this.vel = [0, 0];\n}\n\n// MovingObject.prototype.collideWith = function (otherObject) {\n//   this.game.remove(otherObject);\n//   this.game.remove(this);\n// }\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/scarecrow.js":
/*!**************************!*\
  !*** ./src/scarecrow.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nconst scarecrowImage = new Image ();\nscarecrowImage.src = \"../dist/scarecrow03.png\";\n\nfunction Scarecrow(options) {\n    MovingObject.call(this, { pos: [400, 400], vel: [0, 0], width: 60, height: 60, image: scarecrowImage, game: options.game, isWrappable: true })\n}\n\n\nUtil.inherits(Scarecrow, MovingObject);\n\nScarecrow.prototype.power = function(acc) {\n    this.vel = [this.vel[0] + acc[0], this.vel[1] + acc[1]];\n}\n\nScarecrow.prototype.fireBullet = function() {\n    let bullet = new Bullet({ pos: this.pos, vel: [3, 3], game: this.game, isWrappable: false });\n    this.game.bullets.push(bullet);\n}\nmodule.exports = Scarecrow;\n\n//# sourceURL=webpack:///./src/scarecrow.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        const Surrogate = function () { };\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    }\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
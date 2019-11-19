const Game = require("./game.js"); 

const CONSTANTS = {
    POWER: 1
};

function GameView (ctx) {
    this.game = new Game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    this.bindKeyHandlers();
    setInterval(() => {
        // this.game.moveObjects();
        this.game.step();
        this.game.draw(this.ctx);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function () {
    debugger;
    key('w', () => { this.game.scarecrow.power([0, -CONSTANTS.POWER]) });
    key('a', () => { this.game.scarecrow.power([-CONSTANTS.POWER, 0]) });
    key('s', () => { this.game.scarecrow.power([0, CONSTANTS.POWER]) });
    key('d', () => { this.game.scarecrow.power([CONSTANTS.POWER, 0]) });
    key('space', () => { this.game.scarecrow.fireBullet() });
}

module.exports = GameView;
const Game = require("./game.js"); 


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
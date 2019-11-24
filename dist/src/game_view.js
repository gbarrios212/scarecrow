const Game = require("./game.js"); 


function GameView (ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.clock = 
    window.ctx = this.ctx;
}

// window.clock = document.getElementById("clock");
// clock.innerHTML = "2:30";


GameView.prototype.start = function(){
    this.bindKeyHandlers();
    
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

module.exports = GameView;
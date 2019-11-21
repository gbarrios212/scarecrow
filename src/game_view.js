const Game = require("./game.js"); 


function GameView (ctx) {
    this.game = new Game;
    this.ctx = ctx;
}



GameView.prototype.start = function(){
    this.bindKeyHandlers();
    
    setInterval(() => {
        this.game.step(); 
        this.game.draw(this.ctx);
    }, 20);

    if (this.game.corns.length === 0) {
        this.end();
    }
}


GameView.prototype.bindKeyHandlers = function () {
    key('space', () => { this.game.scarecrow.fireBullet() });
}

GameView.prototype.end = function(){
    if (this.game.corns.length > 0){
        console.log("win");
    } else {
        console.log("lose");
    }
}

module.exports = GameView;
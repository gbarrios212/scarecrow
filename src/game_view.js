const Game = require("./game.js"); 


function GameView (ctx) {
    this.game = new Game;
    this.ctx = ctx;
}

GameView.prototype.start = function(){
    // this.bindKeyHandlers();
    
    setInterval(() => {
        this.game.step(); 
        // had this first before.'..
        this.game.draw(this.ctx);
        // this.game.step();
    }, 20);
}


// GameView.prototype.bindKeyHandlers = function () {
//     key('space', () => { this.game.scarecrow.fireBullet() });
// }

module.exports = GameView;
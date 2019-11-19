
const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    // ctx.fillStyle = "gray";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

   

    gameView = new GameView(ctx);
    gameView.start();
    //for test

    window.ctx = ctx;
    // co = new Crow ({pos:[100, 100]});
    // co.draw(ctx);
    //for test 
});



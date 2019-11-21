
const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

   const clock = document.getElementById("clock");
   clock.innerHTML = "2:00";

    let time = 120;
    setInterval(() => {
        time -= 1;
        let convertMins = Math.floor(time / 60);
        let convertSecs = time % 60;
        clock.innerHTML = convertMins + " : " + convertSecs
        // clock.innerHTML = {`${convertMins}:${convertSecs}`};
        if (time === 0) {
            gameView.end();
            clearInterval();
        }
    }, 1000);

    gameView = new GameView(ctx);
    gameView.start();


    window.ctx = ctx;
});




const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    // document.addEventListener("click", () => {
        // const mainSheet = document.getElementById("main-content-sheet");
        // const start = document.getElementById("start-button");
        // const texts = document.querySelectorAll("#text");
        // mainSheet.classList.add("story");
        // start.classList.add("off");
        // texts.forEach(text => {
            // text.classList.toggle("off");
        // })
            

        // mainSheet.innerHTML = "Two years since they've been gone."

    // })

   window.clock = document.getElementById("clock");
   clock.innerHTML = "2:30";

    window.time = 150;
    window.clockFunc = setInterval(() => {
        time -= 1;
        let convertMins = Math.floor(time / 60);
        let convertSecs = time % 60;
        if (convertSecs === 0) {
            clock.innerHTML = convertMins + " : " + convertSecs + "0";
        } else if (convertSecs < 10) {
            clock.innerHTML = convertMins + " : " + "0" + convertSecs;
        } 
        else {
            clock.innerHTML = convertMins + " : " + convertSecs;
        }
    }, 1000);

    gameView = new GameView(ctx);
    gameView.start();


    window.ctx = ctx;
});


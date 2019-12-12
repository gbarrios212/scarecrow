
const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    //modals and start elements 
    const mainSheet = document.getElementById("main-content-sheet");
    document.addEventListener("click", navigate);
    const start = document.getElementById("start-button");
    const inventory = document.getElementById("inventory-off");
    const bars = document.getElementById("bars-off");
    const clock = document.getElementById("clock");

    
    
    function navigate (e) {
        if (e.target === start) { 
          startGame();
        }
    }

    function startGame() {
      //instructions + HUD
      mainSheet.id = "main-content-sheet-off";
      bars.id = "bars";
      inventory.id = "inventory";


      //clock
      clearInterval(window.clockFunc);
      clearInterval(window.gameFunc);
      clock.innerHTML = "2:30";
      clock.classList.add("on");
      window.time = 150;
      window.clockFunc = setInterval(countdown, 1000);
      const pauseSheet = document.getElementById("pause-sheet");
      
      //test
      //preview grid 
      const grid = document.getElementById("preview-grid-off") || document.getElementById("preview-grid");
      grid.id = "preview-grid";

      // let ctx = canvas.getContext("2d");
      // ctx.imageSmoothingEnabled = false;
      //game start 
      // gameView = new GameView(ctx);

      // gameView.game = new 
      // gameView.restart();
      gameView = new GameView(ctx);
      gameView.start();
      //unpause 
      window.paused = false;
      pauseSheet.classList.remove("on");
    }

    window.paused;

    document.addEventListener("keydown", pause);
    const restartButton = document.getElementById("restart-button")
    restartButton.addEventListener("click", restart);
    
    

    function pause(e) {
        const pauseSheet = document.getElementById("pause-sheet");
        if (e.key === "p" || e.key === "P") {
            if (!window.paused) {
                window.paused = true; 
                pauseSheet.classList.add("on");
            } else if (window.paused) {
                window.paused = false;
                pauseSheet.classList.remove("on");
            }
        }
    }

    function countdown(){
        if (!window.paused) {
          time -= 1;
          let convertMins = Math.floor(time / 60);
          let convertSecs = time % 60;
          if (convertSecs === 0) {
            clock.innerHTML = convertMins + " : " + convertSecs + "0";
          } else if (convertSecs < 10) {
            clock.innerHTML = convertMins + " : " + "0" + convertSecs;
          } else {
            clock.innerHTML = convertMins + " : " + convertSecs;
          }
        }
    }

    // window.ctx = ctx;

    function restart(e) {
      // document.removeEventListener("click", gameView.game.build);
      // document.removeEventListener("mousemove", gameView.game.highlight);
      // startGame();
      mainSheet.id = "main-content-sheet-off";
      bars.id = "bars";
      inventory.id = "inventory";

      clearInterval(window.clockFunc);
      clearInterval(window.gameFunc);
      clock.innerHTML = "2:30";
      clock.classList.add("on");
      window.time = 150;
      window.clockFunc = setInterval(countdown, 1000);
      const pauseSheet = document.getElementById("pause-sheet");

      const grid =
      document.getElementById("preview-grid-off") ||
      document.getElementById("preview-grid");
      grid.id = "preview-grid";

      gameView.restart();

      window.paused = false;
      pauseSheet.classList.remove("on");
      
      // clearInterval(window.clockFunc);
      // clearInterval(window.gameFunc);
      // clock.innerHTML = "2:30";
      // window.time = 150;
      // window.clockFunc = setInterval(countdown, 1000);
      // const pauseSheet = document.getElementById("pause-sheet");
      // const grid = document.getElementById("preview-grid-off") || document.getElementById("preview-grid");
      // grid.id = "preview-grid";
      // window.paused = false;
      // pauseSheet.classList.remove("on");
      // gameView = new GameView(ctx);
      // gameView.start();
    }
});



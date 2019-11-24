
const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    

    const mainSheet = document.getElementById("main-content-sheet");
    document.addEventListener("click", navigate);
    const start = document.getElementById("start-button");
    const instructions = document.getElementById("instruction");
    const instructionsSheet = document.getElementById("instructions-sheet");
    const inventory = document.getElementById("inventory-off");
    const bars = document.getElementById("bars-off");
  
    const clock = document.getElementById("clock");
    function navigate (e) {
        if (e.target === start) {
            mainSheet.id = "main-content-sheet-off";
            bars.id = "bars";
            inventory.id = "inventory";
            clearInterval(window.clockFunc);
            clearInterval(window.gameFunc);
            clock.innerHTML = "2:30";
            clock.classList.add("on");
            window.time = 150;
            window.clockFunc = setInterval(countdown, 1000);
            gameView = new GameView(ctx);
            gameView.start();
            const pauseSheet = document.getElementById("pause-sheet");
            window.paused = false;
            pauseSheet.classList.remove("on");
            
        }
    }


    // instructions.addEventListener("click", () => {
    //     const texts = document.querySelectorAll("#text");
    //     mainSheet.classList.add("story");
    //     start.classList.add("off");
    //     texts.forEach(text => {
    //         text.classList.toggle("off");
    //     })
            

    //     mainSheet.innerHTML = "Two years since they've been gone."

    // })

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

   window.clock = document.getElementById("clock");
   clock.innerHTML = "2:30";

    window.time = 150;
   
    // window.clockFunc = setInterval(() => {
    //     if (!window.paused) {

    //         time -= 1;
    //         let convertMins = Math.floor(time / 60);
    //         let convertSecs = time % 60;
    //         if (convertSecs === 0) {
    //             clock.innerHTML = convertMins + " : " + convertSecs + "0";
    //         } else if (convertSecs < 10) {
    //             clock.innerHTML = convertMins + " : " + "0" + convertSecs;
    //         } 
    //         else {
    //             clock.innerHTML = convertMins + " : " + convertSecs;
    //         }
    //     }
    // }, 1000);

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

    // gameView = new GameView(ctx);
    // gameView.start();
    
    window.ctx = ctx;


    function restart(e) {
      // restartButton.innerHTML = "Are you sure?"
      // const pauseSheet = document.getElementById("pause-sheet");
      // confEle = document.createElement("div");
      // confEle.id = "confirmation";
      // // yesEle = document.createElement("div");
      // // yesEle.id = "yes";
      // // yesEle.innerHTML = "Yes";
      // // noEle = document.createElement("div");
      // // noEle.id = "no";
      // // noEle.innerHTML = "No";
      // pauseSheet.appendChild(confEle);
      // // confEle.appendChild("div");
      // // confEle.appendChild("div");
      // debugger;
      clearInterval(window.clockFunc);
      clearInterval(window.gameFunc);
      clock.innerHTML = "2:30";
      window.time = 150;
      window.clockFunc = setInterval(countdown, 1000);
      const pauseSheet = document.getElementById("pause-sheet");
      const grid = document.getElementById("preview-grid-off") || document.getElementById("preview-grid");
      grid.id = "preview-grid";
      window.paused = false;
      pauseSheet.classList.remove("on");
      gameView = new GameView(ctx);
      gameView.start();
      //need to turn on or turn off win sheet and lose sheet no?

    }

    // window.restart = restart();
});



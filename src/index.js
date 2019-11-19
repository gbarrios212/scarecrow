
const MovingObject = require("./moving_object.js");
const Crow = require("./crow.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")
// window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("scarecrow-canvas");
    const ctx = canvas.getContext('2d');
    // canvas.setAttribute('width', window.innerWidth);
    // canvas.setAttribute('height', window.innerHeight);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    gameView = new GameView(ctx);
    gameView.start();
    //for test
    window.Crow = Crow;
    window.ctx = ctx;
    // co = new Crow ({pos:[100, 100]});
    // co.draw(ctx);
    //for test 

    var scare = new Image();
    scare.src = "../dist/scarecrow03.png"
    var crow = new Image();
    crow.src = "../dist/crow0.png";
    var corn = new Image();
    corn.src = "../dist/corn0.png";
    // const crow = document.getElementById("crow");
    // const corn = document.getElementById("corn");
    // const scare = document.getElementById("scare");
    ctx.drawImage(scare, 300, 30, 80, 80);
    ctx.drawImage (crow, 10, 20, 80, 80);
    ctx.drawImage(corn, 10, 100, 80, 80);
    ctx.drawImage(corn, 10, 200, 80, 80);
    ctx.drawImage(corn, 10, 300, 80, 80);
    ctx.drawImage(corn, 100, 100, 80, 80);
    ctx.drawImage(corn, 100, 200, 80, 80);
    ctx.drawImage(corn, 100, 300, 80, 80);
    // const Janice2 = new GameView(ctx);
    // Janice2.start();
});

//want to draw and move and draw and move 


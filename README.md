# Scarecrow's Last Stand

![alt text](https://imgur.com/xp8HCQb.png)

[Play here](https://scarecrows-last-stand.firebaseapp.com/)

Created by 

[Gabriel Barrios](https://github.com/gbarrios212)


Scarecrow's Last Stand is a tower defense game with a bucolic backdrop.  At the decrepit Dreamland Farm, a lonely scarecrow attempts to honor the legacy of his now deceased owners by protecting their last crops against an insatiable murder of crows.  

Tower defense games involve a mix of both strategy and real time action, as users can both fend off enemies on their own as well as implement structures that can assist them in their defense.  Generally, this game will proceed as follows: 

- the board will be set with a certain number of crops at full health
- a clock will determine the amount of time during which the crops must be defended 
- an enemy wave will zero in on crops for the duration of the attack period
- the player will fend off enemies by chipping away at their HP. 
- the player may set up towers to help defeat enemies 
- both the player and their towers may heal corns throughout the game
- the player receives a movement penalty on getting too close to enemies 
    - a stack of penalties will result in a status change 
- should all corns lose health, the farm is done and the game is over.  
- if the player manages to protect at least one corn from the horde, the game is won. 



## Functionality & MVP
In the current iteration of this game, users can 
- Start, pause, and reset the game board 
- Customize their farm area with structures to aid in their defense
- Control an individual avatar vulnerable to status changes


## Wireframes 

- This game consists of a single board which will contain all the game's activity.  
- Below this window, viewers can check their current inventory.
- Below this, two bars will be present that update in real time to reflect status changes 
    ![alt text](https://imgur.com/1EPhTE7.png)
    - The fear bar, colored in purple, will rise as players touch crows and will lead to a "frightened state", in which movement is slowed, though speed of heart release is significantly increased.  This may occur several times in one game and will last ten seconds each time.  
    ![alt text](https://imgur.com/nrTrMZR.png)
    - The courage bar, colored in orange, will rise as players lose corns and will lead to an "emboldened state", in which movement is increased, hearts are released in two directions, and hearts are allowed to wrap continually around the screen.  This will only occur once per game and will last fifteen seconds.  
    ![alt text](https://imgur.com/AOGMhSv.png)
- A clock will be rendered above the game window to keep track of time remaining for the level.
- A hidden grid is superimposed on the game board to allow for tile selection when tower creation is available. 
- A pause screen is always accessible on pressing "p", through which players can reset the game. 


## Technologies & Challenges
 
### Architecture

Scarecrow's Last Stand is built with the following technologies: 
- Vanilla Javascript, HTML, and CSS for effects. 
- Piskelapp for sprite creation. 
- Webpack to bundle js files. 
- Google Firebase to host and persist data. 


### Challenges 
The challenges of designing this game arose primarily because of the limitation placed on technologies used.  No libraries were added in the creation of this game.  No animations or pixels were borrowed.  Everything down to the sprites was made from scratch using vanilla DOM manipulation.  

### Sample Code 

Perhaps one of the trickier pieces of logic to implement with these restrictions involved tile selection and board setup.  

The game itself is an 800px x 400px board represented programmatically by a 2-Dimensional array of length 10 holding subarrays of length 20.  Elements within the subarrays are labeled either 1, to represent an occupied space, or 0, to represent an unoccupied space. 

```
const gameMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
```

A preview-grid spanning 200 elements, each measuring 40px x 40px, is superimposed.  Each div element corresponds with a different tile on the aforementioned array representing the gameMap.   

```
#preview-grid{
    display: grid;
    grid-template-columns: repeat(20, 40px);
    grid-template-rows: repeat(10, 40px);
    position: absolute;
    width: 800px;
    height: 400px;
    opacity: 0.5;
    top: 140px;
    background: transparent;
    border: 2px solid red;
    border-radius: 2px;
}
```

Two events were added to the board within the game constructor. 

```
document.addEventListener("mousemove", highlight);
document.addEventListener("click", build);
```
A withinBounds function was added to limit these two functions to the canvas area. 

```
function withinBounds(x, y) {
    return x < 800 && x >= 0 && y < 400 && y >= 0;
}
```

The affected HTML elements and variables were set up in the game constructor. 

```
this.grid = document.getElementById("preview-grid");
let ele;
for (tile = 1; tile < this.gameMap.length * this.gameMap[0].length + 1; tile ++) {
    ele = document.createElement("div");
    ele.id = tile;
    this.grid.appendChild(ele);
};
this.coords = {x: 0, y: 0};
this.tileCol;
this.tileRow;
this.elem = document.getElementById("scarecrow-canvas");
this.elemLeft = this.elem.offsetLeft;
this.elemTop = this.elem.offsetTop;

```

The highlight function calculated whether the hovered over position corresponded with an occupied space on the array, in which case the grid was given a class "good", which itself rendered a green space on the preview-grid. 

![alt text](https://imgur.com/IkSXbc8.png)

The default setting, which renders a grid square red to represent occupied, is achieved by removing the "good" class.  Math that connects the coordinates to our gameMap was handled here, as well. 

![alt text](https://imgur.com/wz4DRur.png)

The conversion from x and y coordinates into more easily divisible tiles allowed for neater, more precise placement of tower pieces around the board.

```
function highlight(e) {  
    this.coords.x = e.pageX - this.elemLeft;
    this.coords.y = e.pageY - this.elemTop;
    if (withinBounds(this.coords.x, this.coords.y)) {
        this.tileCol = Math.floor(this.coords.y / 40);
        this.tileRow = Math.floor(this.coords.x / 40);
        let tileValue = gameMap[this.tileCol][this.tileRow];
        if (tileValue !== 1) {
            this.grid.classList.add("good");
        } else {
            this.grid.classList.remove("good");
        }
    }
}
```
The corresponding CSS below: 

```
#preview-grid > div:hover{
    background: red;
}

#preview-grid.clear > div:hover{
    background: green;
}
```

The build function, which is called and bound within our game constructor, is responsible for checking whether the clicked tile is unoccupied and the game is not paused.  If so, a new tower is created, the instance of which is pushed to an array in the constructor.  

![alt text](https://imgur.com/v6HjDlx.png)

Additionally, a number representing remaining towers is counted down, our gameMap at that tile position is rendered occupied, and, if there are no more towers remaining in the inventory, the event listeners are removed from the document and the preview grid id is changed to an off mode in order to prevent further additions to the board. 

```
function build(e) {
    if (withinBounds(this.coords.x, this.coords.y)) {
        let tileValue = gameMap[this.tileCol][this.tileRow];
        if (tileValue !== 1 && !window.paused) {
            let x = this.tileRow * 40 + 2;
            let y = this.tileCol * 40;
            angryTower = new AngryTower({ pos: [x, y], game: this });
            this.towers.push(angryTower);
            this.gameMap[this.tileCol][this.tileRow] = 1;
            invSlot = document.getElementById(`inv-${this.towersAvail}`);
            this.towersAvail -= 1;
            invSlot.innerHTML = "";
        }
        if (this.towersAvail === 0) {
            document.removeEventListener("click", build);
            document.removeEventListener("mousemove", highlight);
            this.grid.classList.remove("good");
            this.grid.id = "preview-grid-off";
        }
    }
}
```

## Timeline

### Day 1
- Set up skeleton for early game logic 
    - Corn 
    - Crows 
    - User 
    - Board 
- Create sprites and graphics 
- Ensure proper implementation of Firebase 
- Have first level plotted out 
    - player is static
    - enemies move toward crops
    - crops can die 
    - enemies can lose health and run off when defeated

## Day 2 
- Develop collision
- Create time based events to scale difficult within current level 
- Implement features for intermediate levels 
    - player movement enabled 
    - add/move towers around farm 

## Day 3 
- Implement status changes
    - Fear + Courage 
- Animate scarecrow
- Animate environment 

## Features to come 
- Sounds and music 
- Sample beginner level 
- Sample advanced level 
- Level progression 
- Save functionality 
- Post level rewards 
    - Defeating more crows provides more resources for tower creation/repair 
    - Finsihing with more protected corns leaders to more resources for corn creation/repair 
- Animations 
    - General movement for corns 
    - More seamless transtion from afternoon to night time 
    - Different image render for crows on defeat 
- Enemy & tower variety 
    - Different speeds, skills, appearances, targets, movements and weaknesses
- Corn reinforcements 
    - upgrades to make corns more resistant and defensive 
- Cutscenes/Story mode 
- Writing and illustrations 

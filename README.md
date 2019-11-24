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
    - The fear bar, colored in purple, will rise as players touch crows and will lead to a "frightened state", in which movement is slowed, though speed of heart release is significantly increased.  This may occur several times in one game and will last ten seconds each.  
    - The courage bar, colored in orange, wiill rise as players lose corns and will lead to an "emboldened state", in which movement is increased, hearts are released in two directions, and hearts are allowed to wrap continually around the screen.  This will only occur once per game and will last fifteen seconds.  
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

Perhaps one of trickier pieces of logic to implement with these restrictions involved tile selection.  

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

Above this, a preview-grid spanning 200 elements, each measuring 40px x 40px, is superimposed.  Each div element corresponds with a different tile on the aforementioned array representing the gameMap.   

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

Two events were added to the board on game initialization.  

To prevent the player from making any more selections, which would result in no changes to the game, the event is removed once the number of towers matches the number of movements in the game.  

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

## Day 4 
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

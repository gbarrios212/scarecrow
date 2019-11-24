# Scarecrow's Last Stand
Scarecrow's Last Stand is a tower defense game with a bucolic backdrop.  At the decrepit Dreamland Farm, a lonely scarecrow attempts to honor the legacy of his now deceased owners by protecting their last crops against an insatiable murder of crows.  

Tower defense games involve a mix of both strategy and real time action, as users can both fend off enemies on their own as well as implement structures that can assist them in their defense.  Generally, this game will proceed as follows: 

- the board will be set with a certain number of crops at full health
- a clock will determine the amount of time during which the crops must be defended 
- an enemy wave will zero in on crops for the duration of the attack period
- the player will fend off crows by chipping away at their HP. 
- should all corns lose health, the farm is done and the game is over.  
- if the player manages to protect at least one corn from the horde, the next level is unlocked and the player is rewarded with added resources 
    - early on, these resources are exclusively seeds which the player can use to repopulate the farm 
    - As the game progresses, the player will be able to build structures to aid in the farm's defense, including miniature scarecrows and reinforcements for corn



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
The challenge of this game lied primarily in the limitation placed on technologies used.  No libraries were added in the creation of this game.  No animations or pixels were borrowed.  Everything down to the sprites was made from scratch using basic technology.  

Being able to render different animations 



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
- Create time based events to scale difficult within current level 
- Implement features for intermediate levels 
    - player movement enabled 
    - post level rewards implemented 
    - add/move crops around farm 

## Day 3 
- Ensure differences across levels in place 
- Implement later level features 
    - can build mini scarecrows with their own defense systems 


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

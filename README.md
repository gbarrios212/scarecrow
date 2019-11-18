# Scarecrow's Last Stand
Scarecrow's Last Stand is a riff off popular tower defense games with a bucolic backdrop.  At the decrepit Dreamland Farm, a lonely scarecrow attempts to honor the legacy of his now deceased owners by protecting their last crops against an insatiable murder of crows.  

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
In this game, users can 
- Start, pause, and reset the game board 
- Progress through levels 
- Persist data across levels 
- Customize their farm area with structures to aid in their defense

Additionally, this project will include game instructions and a production README. 

## Wireframes 

- This game will consist of a single board which will contain all the game's activity.  
- Below this window, viewers can get a quick reminder about controls.
- Another window will track resources. 
- A clock will be rendered above the game window to keep track of time remaining during a particular wave. 


## Technologies & Challenges
 
### Architecture

Scarecrow's Last Stand is built with the following technologies: 
- Vanilla Javascript, HTML, and CSS for effects. 
- Browserify to bundle js files. 
- Google Firebase to persist data. 


### Challenges 
Scaling difficulty with level progression + ensuring proper saving of information will be top priority challenges to resolve prior to moving too far into this project. 


## Timeline

### Day 1
- Set up skeleton for early game logic 
    - Corn 
    - Crows 
    - User 
    - Board 
- Find sprites and graphics 
- Ensure proper implementation of Firebase 
- Research level progression 
- Have first level plotted out 
    - player is static
    - enemies move toward crops
    - crops can die 
    - enemies can lose health and run off when defeated

## Day 2 
- Focus on logic for scaling level difficulty
- Implement features for intermediate levels 
    - player movement enabled 
    - post level rewards implemented 
    - add/move crops around farm 

## Day 3 
- Ensure differences across levels in place 
- Implement later level features 
    - can build mini scarecrows with their own defense systems 

BONUS 
- Add writing 
- Add music 
- Research implementing miniature cutscenes between levels 
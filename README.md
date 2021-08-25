Dice function:

"it should create a random number between 1 and 6"

"it should recognize 1, and return 0"

"it should add number to turn total if !number === 1"

//////////////////////////////
when a player clicks play:
a random number generator shuffles through 1-6
if the number === 1, points to add = 0 and it becomes the other players turn
if !number === 1, branch
  option 1, end turn keep the points, add points to pointTotal
  option 2, roll again, 
    if !number === 1, add "new" points to points, (push to array? add array elements?)
      options 1 and 2 present again
    if number === 1, points = 0
if player ends turn || number === 1, toggle to other player
easy mode:
  if computer loops twice, end computer turn
hard mode:
  if computer currentPoints reaches x number, end turn, else if, loop again
if pointsTotal >= 100, game ends


Functions needed:
Dice function 
  randomize 1-6
  if 1, end turn
  else if, push points to current turn array?

Function to add current turn array elements together
  add total to pointsTotal
currentTurnArray = [points 1, points 2, etc]

two click functions:
  1: roll again
  2: end turn

Function to toggle between each player

add functionality to show each roll value individually?
show all array values of points?

Objects needed:

player 1
  pointsTotal
  points
player 2
  pointTotal
  points


Dice function:

test: "it should create a random number between 1 and 6"
code:
dice()
expected output: a random number between 1 and 6

test: "it should recognize 1, and return false if the number isn't 1, it should return the number"
code: dice()
expected output: false if number === 1, number if !number === 1

test: "if !return === false, it should add the number to an array (array used to store the points accumulated in one turn)"

test: "if number === 1, the array should clear"

test: "it should add up all the numbers in the current total array and push the sum into the total points array"

//////////////////////////////
when a player clicks play:

still need an option to end turn and reset currentTotal to 0


if player ends turn || number === 1, toggle to other player
easy mode:
  if computer loops twice, end computer turn
hard mode:
  if computer currentPoints reaches x number, end turn, else if, loop again
if pointsTotal >= 100, game ends



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


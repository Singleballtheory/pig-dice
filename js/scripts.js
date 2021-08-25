
let currentTotal = [];

function dice() {
  let number = Math.floor((Math.random() * 6) + 1);
  if (number !== 1) {
    currentTotal.push(number);
  } else if (number === 1) {
    return currentTotal = [];
    //call function here that ends the turn
  }
  console.log(currentTotal);
} 

function sum(currentTotal) {
  let totalPoints = 0;
  for (let i=0; i < currentTotal.length; i++) {
    totalPoints = totalPoints + currentTotal[i];
  }
  return totalPoints;
}

function Player(name, currentTotal, totalPoints) {
  this.name = name;
  this.currentTotal = currentTotal;
  this.totalPoints = totalPoints;
}

const player1 = new Player(inputName, 0, 0)

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

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const nameOne = $("input#name1").val();
    const nameTwo = $("input#name2").val();
    let playerOne = new Player (nameOne, 0, 0);
    let playerTwo = new Player (nameTwo, 0, 0);
    $("#game").show();
    $("#name").hide();
    $("#player1").html(nameOne);
    $("#player2").html(nameTwo);
  })
})
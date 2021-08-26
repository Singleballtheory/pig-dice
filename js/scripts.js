
function Player(variable2, variable) {
  this.name = variable2;
  this.currentTotal = [];
  this.totalPoints = variable;
}

Player.prototype.dice = function() {
  let number = Math.floor((Math.random() * 6) + 1);
  if (number !== 1) {
    this.currentTotal.push(number);
  } else if (number === 1) {
    toggle();
    return this.currentTotal = [];
  }
} 

Player.prototype.sum = function() {
  for (let i=0; i < this.currentTotal.length; i++) {
    this.totalPoints = this.totalPoints + this.currentTotal[i];
  } if (this.totalPoints >= 20) {
    this.winner();
  }
  return this.currentTotal = [];
}

function toggle() {
  $("#roll1, #hold1").toggle();
  $("#roll2, #hold2").toggle();
}

Player.prototype.winner = function() {
  $("#youWin").show();
  $("#game").hide();
  $("#winner").html(this.name);
}

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const nameOne = $("input#name1").val();
    const nameTwo = $("input#name2").val();
    let playerOne = new Player (nameOne,0);
    let playerTwo = new Player (nameTwo,0);
    $("#game").show();
    $("#name").hide();
    $("#player1").html(nameOne);
    $("#player2").html(nameTwo);
    $("#roll1").on("click",function() {
      playerOne.dice();
      $("#currentTotal1").html(playerOne.currentTotal);
    });
    $("#hold1").on("click", function() {
      playerOne.sum();
      $("#pointTotal1").html(playerOne.totalPoints);
      $("#currentTotal1").html("0");
      toggle();
    });
    $("#roll2").on("click",function() {
      playerTwo.dice();
      $("#currentTotal2").html(playerTwo.currentTotal);
    });
    $("#hold2").on("click", function() {
      playerTwo.sum();
      $("#pointTotal2").html(playerTwo.totalPoints);
      $("#currentTotal2").html("0");
      toggle();
    });
  });
})


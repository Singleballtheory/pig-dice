this.totalPoints = 0;


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
  } if (this.totalPoints >= 10) {
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


// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// }
// $(document).ready(function(){
//   var fruitsArray = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
// $.each(fruitsArray, function(index, value){
//   $("#result").append(index + ": " + value + '<br>');
// });
// });
///////////////////////

// const myArray = ["stone","paper","scissors"];
// const embedElements = () => {
//    myArray.forEach(element => {
//       document.getElementById('result').innerHTML +=
//       `<div>${element}</div><br />`;
//       // here result is the id of the div present in the DOM
//    });
// };

// playerOne.currentTotal ;
// const playerOneCTHTML = () {
//   playerOne[currentTotal].forEach(number) {
//     $("#currentTotal1").append("<li>" + number + "</li>")
//   }
// }

// playerOne[currentTotal].forEach(function(number) {
//   $("#currentTotal1").append(number + ", ")
// })

// Player.prototype.html = function() {
//   this.currentTotal.forEach(function (number) {
//     if (number !== 1) {
//     this.currentHtml.push(number + ", ");
//     }
//   });
// }

// Player.prototype.currentSum = function() {
//   this.currentSumTotal = 0;
//   for (let i=0; i < this.currentTotal.length; i++) {
  //   }
//     this.currentSumTotal += this.currentTotal[i];
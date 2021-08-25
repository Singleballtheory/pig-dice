


Player.prototype.dice = function() {
  let number = Math.floor((Math.random() * 6) + 1);
  if (number !== 1) {
    this.currentTotal.push(number);
  } else if (number === 1) {
    return this.currentTotal = [];
    //call function here that ends the turn
  }
  console.log(this.currentTotal);
} 

Player.prototype.sum = function() {
  this.totalPoints = 0;
  for (let i=0; i < this.currentTotal.length; i++) {
    this.totalPoints = this.totalPoints + this.currentTotal[i];
  }
}

function Player(variable2, variable) {
  this.name = variable2;
  this.currentTotal = [];
  this.totalPoints = variable;
}

$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();
    const nameOne = $("input#name1").val();
    const nameTwo = $("input#name2").val();
    let playerOne = new Player (nameOne);
    let playerTwo = new Player (nameTwo);
    $("#game").show();
    $("#name").hide();
    $("#player1").html(nameOne);
    $("#pointTotal1").append(playerOne.totalPoints);
    $("#currentTotal1").append(playerOne.currentTotal);
    $("#player2").html(nameTwo);
    $("#pointTotal2").append(playerTwo.totalPoints);
    $("#currentTotal2").append(playerTwo.currentTotal);
    $("#roll1").on("click",function() {
      playerOne.dice();
      return playerOne.currentTotal;
    })
    $("#roll2").on("click",function() {
      playerTwo.dice();
    })
  })
  
})



// function attachContactListeners() {
//   $("ul#contacts").onclick(function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// }
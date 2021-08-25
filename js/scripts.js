

let currentTotal = [];

function dice() {
  let number = Math.floor((Math.random() * 6) + 1);
  if (number !== 1) {
    currentTotal.push(number);
  } else if (number === 1) {
    return false;
  }
  console.log(currentTotal);
} 
dice();

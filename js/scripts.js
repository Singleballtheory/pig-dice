function dice() {
  let number = Math.floor((Math.random() * 6) + 1)
  return number
}

function points() {
  if (number === 1) {
    return false;
  } else {
    return number;
  }
}


function dice() {
  let number = Math.floor((Math.random() * 6) + 1);
  if (number === 1) {
    return false;
  }
  return number
}
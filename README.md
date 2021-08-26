# Pig Dice

#### A two-player dice roll game

#### By Scott Hutley and Chynna Lew

## Technologies Used

* html
* bootstrap and css
* js and jquery
* 

## Description

Pig dice is a two-player game where the first player to 100 wins and the other player is a terrible loser. Players roll a single die, accumulating points with each roll. At any point in time they can save their total into a grand total in their race to 100. If, however, they roll a 1, they will lose any unsaved points and the other player gets to begin rolling. May the odds be ever in your favor. Oink. Oink.

## Setup/Installation Requirements

* Clone this repository to an empty folder or to your desktop. Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
* Navigate to the index.html within the folder and open with your web browser.
* Start pigging those dice.

## Known Bugs

* The currentTotal array displays each roll to the player without any spaces or separation. It also does not display as a total until it is saved by the player into their Total Points.

## License

[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) 2021 Scott Hutley and Chynna Lew_

## Contact Information

_Scott Hutley <scotthutley1@comcast.net>_
_Chynna Lew <chynnalew@yahoo.com>_

### Tests

```
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
```
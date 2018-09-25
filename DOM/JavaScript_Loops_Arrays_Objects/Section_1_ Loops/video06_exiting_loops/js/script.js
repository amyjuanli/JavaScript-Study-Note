var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

// do {
//   guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//   }
// } while ( ! correctGuess )
//

guess = prompt('I am thinking of a number between 1 and 10. What is it?');
// while(true) {
//   guessCount += 1;
//   if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
//     break;
//   }
// }


// while loop either run 10 times or break when guess correct
while(guessCount < 10) {
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
    break;
  }
}

if (correctGuess) {
  document.write('<h1> You guess the correct Number!</h1');
  document.write('After '+guessCount+' tries');
} else {
  document.write('<h1> Sorry! You guess the incorrect Number!</h1');
  document.write('After '+guessCount+' tries');
}


document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

'use strict';

var Name = prompt('Hello! Welcome to my About Me page! What is your name?');
alert('Welcome, ' + Name + '!');


// QUESTION 1 

var Game = prompt('Let\'s play a guessing game to see what you already know about me! Are you interested in playing?');

// console.log('Does the user want to play a game? ' + Game);

if (Game.toLowerCase() === 'yes' || Game.toLowerCase() === 'y') {
  alert('Awesome! Let\'s play a game!');
} else if(Game.toLowerCase() === 'no' || Game.toLowerCase() === 'n'){
  alert('Too bad. We\'re playing anyway!');
} else {
  alert('Please enter yes or no.');
}

// QUESTION 2

var South = prompt('Am I a native Washingtonian?');
// console.log('Does the user think I\'m from Washington? ' + South);

if (South.toLowerCase() === 'yes') {
  alert('Not quite! I was born and raised in Louisiana.');
} else if(South.toLowerCase() === 'no'){
  alert('Correct! I was born and raised in Louisiana.');
} else {
  alert('Please enter yes or no.');
}

// QUESTION 3

var Deb = prompt('Speaking of Louisiana- was I a debutante?');
// console.log('Does the user think I\'m was a deb? ' + Deb)

if (Deb.toLowerCase() === 'yes') {
  alert('No way! My upbringing was not nearly that fancy!');
} else if(Deb.toLowerCase() === 'no'){
  alert('Correct! I was never a deb.');
} else {
  alert('Please enter yes or no.');
}

// QUESTION 4

var SameThing = prompt('On a related note, is cotillion the same as being a debutante?');
// console.log('Does the user think cotillion and being a deb are the same thing? ' + SameThing)

if (SameThing.toLowerCase() === 'yes') {
  alert('No way! They are very different! Once you\'re done with this fabulous quiz, Google the difference!');
} else if(SameThing.toLowerCase() === 'no'){
  alert('Correct! You must be a Southerner yourself!');
} else {
  alert('Please enter yes or no.');
}


// QUESTION 5

var Siblings = prompt('OK, it\'s time for the last question. I\'ll even make it an easy one. Do I have any siblings?');
// console.log('Does the user think I have any siblings? ' + Siblings)

if (Siblings.toLowerCase() === 'yes') {
  alert('Nope! I\'m an only child. Thanks for playing this guessing game, ' + Name);
} else if(Siblings.toLowerCase() === 'no'){
  alert('Correct! I\'m an only child. Thanks for playing this guessing game, ' + Name + '!');
} else {
  alert('Please enter yes or no.');
}


// QUESTION 6 
var number = 7;

for (var i = 0; i < 4; i++) {
  var guess = prompt('Let\'s play a guessing game. Try to guess my favorite number.');
  if (parseInt(guess) < number) {
    alert('Too low!');
  } else if (parseInt(guess) > number) {
    alert('Too high!');
  } else if (parseInt(guess) === number){
    alert('Correct!');
    break;
  }
  if (i === 3) {
    alert('You are out of guesses. The correct answer is ' + number);
    break;
  }
}


// QUESTION 7

var movies = ['Titanic', 'Get Out', 'The Labyrinth'];

for (var i = 0; i < 6; i++){
  var whatmovie = prompt('Can you guess one of my favorite movies?');
  var answeredcorrect = false;
  // this loop only checks for correct answers
  for (var j = 0; j < movies.length; j++){
    if (movies[j] === whatmovie){
      alert('You are correct!');
      answeredcorrect = true;
    }
  }
  if (answeredcorrect === true){
    break;
  } else {
    alert('You are incorrect. Please try again.');
  }
}


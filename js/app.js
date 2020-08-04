'use strict';

var Name = prompt('Hello! Welcome to my About Me page! What is your name?')
alert('Welcome, ' + Name + '!')


// QUESTION 1 

var Game = prompt('Let\'s play a guessing game to see what you already know about me! Are you interested in playing?');

// console.log('Does the user want to play a game? ' + Game);

if (Game.toLowerCase() === 'yes') {
  alert('Awesome! Let\s play a game!')
} else if(Game.toLowerCase() === 'no'){
  alert('Too bad. We\'re playing anyway!')
} else {
  alert('Please enter yes or no.')
}

// QUESTION 2

var South = prompt('Am I a native Washingtonian?');
// console.log('Does the user think I\'m from Washington? ' + South);

if (South.toLowerCase() === 'yes') {
  alert('Not quite! I was born and raised in Louisiana.')
} else if(South.toLowerCase() === 'no'){
  alert('Correct! I was born and raised in Louisiana.')
} else {
  alert('Please enter yes or no.')
}

// QUESTION 3

var Deb = prompt('Speaking of Louisiana- was I a debutante?');
// console.log('Does the user think I\'m was a deb? ' + Deb)

if (Deb.toLowerCase() === 'yes') {
  alert('No way! My upbringing was not nearly that fancy!')
} else if(Deb.toLowerCase() === 'no'){
  alert('Correct! I was never a deb.')
} else {
  alert('Please enter yes or no.')
}

// QUESTION 4

var SameThing = prompt('On a related note, is cotillion the same as being a debutante?');
// console.log('Does the user think cotillion and being a deb are the same thing? ' + SameThing)

if (SameThing.toLowerCase() === 'yes') {
  alert('No way! They are very different! Once you\'re done with this fabulous quiz, Google the difference!')
} else if(SameThing.toLowerCase() === 'no'){
  alert('Correct! You must be a Southerner yourself!')
} else {
  alert('Please enter yes or no.')
}


// QUESTION 5

var Siblings = prompt('OK, it\'s time for the last question. I\'ll even make it an easy one. Do I have any siblings?');
// console.log('Does the user think I have any siblings? ' + Siblings)

if (Siblings.toLowerCase() === 'yes') {
  alert('Nope! I\'m an only child. Thanks for playing this guessing game, ' + Name)
} else if(Siblings.toLowerCase() === 'no'){
  alert('Correct! I\'m an only child. Thanks for playing this guessing game, ' + Name + '!')
} else {
  alert('Please enter yes or no.')
}

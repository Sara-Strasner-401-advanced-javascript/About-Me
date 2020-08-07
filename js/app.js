'use strict';


var Name = prompt('Hello! Welcome to my About Me page! What is your name?');

alert('Welcome, ' + Name + '!');
function question1() {
  var Game = prompt('Let\'s play a guessing game to see what you already know about me! Are you interested in playing?');


  if (Game.toLowerCase() === 'yes' || Game.toLowerCase() === 'y') {
    alert('Awesome! Let\'s play a game!');}
  else if(Game.toLowerCase() === 'no' || Game.toLowerCase() === 'n'){
    alert('Too bad. We\'re playing anyway!');}
  else {
    alert('Please enter yes or no.');
  }
}
question1();

var finalScore = 0;



function question2() {

  var South = prompt('Am I a native Washingtonian?');

  if (South.toLowerCase() === 'yes') {
    alert('Not quite! I was born and raised in Louisiana.');
  } else if(South.toLowerCase() === 'no'){
    finalScore++;
    alert('Correct! I was born and raised in Louisiana.');
  } else {
    alert('Please enter yes or no.');
  }
}
question2();



function question3() {
  var Deb = prompt('Speaking of Louisiana- was I a debutante?');
  if (Deb.toLowerCase() === 'yes') {
    alert('No way! My upbringing was not nearly that fancy!');
  } else if(Deb.toLowerCase() === 'no'){
    finalScore++;
    alert('Correct! I was never a deb.');
  } else {
    alert('Please enter yes or no.');
  }
}


question3();

function question4() {
  var SameThing = prompt('On a related note, is cotillion the same as being a debutante?');
  if (SameThing.toLowerCase() === 'yes') {
    alert('No way! They are very different! Once you\'re done with this fabulous quiz, Google the difference!');
  } else if(SameThing.toLowerCase() === 'no'){
    finalScore++;
    alert('Correct! You must be a Southerner yourself!');
  } else {
    alert('Please enter yes or no.');
  }
}


question4();



function question5() {

  var Siblings = prompt('OK, it\'s time for the last question. I\'ll even make it an easy one. Do I have any siblings?');

  if (Siblings.toLowerCase() === 'yes') {
    alert('Nope! I\'m an only child. Thanks for playing this guessing game, ' + Name);
  } else if(Siblings.toLowerCase() === 'no'){
    finalScore++;
    alert('Correct! I\'m an only child. Thanks for playing this guessing game, ' + Name + '!');
  } else {
    alert('Please enter yes or no.');
  }
}

question5();


function question6() {

  var number = 7;

  for (var i = 0; i < 4; i++) {
    var guess = prompt('Let\'s play a guessing game. Try to guess my favorite number.');
    if (parseInt(guess) < number) {
      alert('Too low!');
    } else if (parseInt(guess) > number) {
      alert('Too high!');
    } else if (parseInt(guess) === number){
      finalScore++;
      alert('Correct!');
      break;
    }
    if (i === 3) {
      alert('You are out of guesses. The correct answer is ' + number);
      break;
    }
  }

}
question6();


function question7() {
  var movies = ['Titanic', 'Get Out', 'The Labyrinth'];

  for (var x = 0; x < 6; x++){
    var whatmovie = prompt('Can you guess one of my favorite movies?');
    var answeredcorrect = false;
    for (var j = 0; j < movies.length; j++){
      if (movies[j] === whatmovie){
        finalScore++;
        alert('You are correct! All of the possible answers were Titanic, Get Out, or The Labyrinth');
        answeredcorrect = true;
      }
    }
    if (answeredcorrect === true){
      break;
    } else {
      alert('You are incorrect. Please try again.');
      if (x === 5) {
        alert('You are out of guesses. The correct answers were Titanic, Get Out, or The Labyrinth');
        break;
      }
    }
  }
}


question7();

alert('Thanks for stopping by, ' + Name + '! Your final score was ' + finalScore + '.');

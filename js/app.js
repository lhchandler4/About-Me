'use strict';

var myState = prompt('Did Luke spend most of his life in Tennessee');
if(myState === 'yes' || myState === 'Yes' || myState === 'Y' || myState === 'y'){
  alert('You are right! He spent his first 22 years there.');
  console.log('You\'re right!');
} 
else if(myState === 'no' || myState === 'No' || myState === 'N' || myState === 'n'){
  alert('Nope. He did spend most of his life in Tennessee.');
  console.log('You guessed wrong');
}
else{
  console.log('Please answer either Yes or No. All questions follow Yes/No format!');
}

var myChild = prompt('Is Luke an only child?');
if(myChild === 'yes' || myChild === 'Yes' || myChild === 'Y' || myChild === 'y'){
  alert('Nope. He has 2 sisters and 1 brother.');
  console.log('You guessed wrong');
} else if(myChild === 'no' || myChild === 'No' || myChild === 'N' || myChild === 'n'){
  alert('You are right. He is one of 4 children.');
  console.log('You\'re right!');
}
else{
  console.log('Yes or No answers please!');
}

var myLang = prompt('Does Luke speak a foreign language?');
if(myLang === 'yes' || myLang === 'Yes' || myLang === 'Y' || myLang === 'y'){
  alert('You are correct. He speaks Korean');
  console.log('You\'re right!');
} else if(myLang === 'no' || myLang === 'No' || myLang === 'N' || myLang === 'n'){
  alert('Nah. He does speak a foreign language. Korean!');
  console.log('You guessed wrong');
}
else{
  console.log('Yes or No answers please!');
}

var myPet = prompt('Does Luke have a pet at home?');
if(myPet === 'yes' || myPet === 'Yes' || myPet === 'Y' || myPet === 'y'){
  alert('No.... He does\'t have a pet but really wants a cat and dog!');
  console.log('You guessed wrong');
} else if(myPet === 'no' || myPet === 'No' || myPet === 'N' || myPet === 'n'){
  alert('Unfortunately you\'re right... No pets as of yet...');
  console.log('You\'re right!');
}
else{
  console.log('Yes or No answers please!');
}

var myMtn = prompt('Is Luke\'s favorite hike around Seattle Mt. Ranier?');
var myMtn2 = myMtn.toUpperCase();
if (myMtn2 === 'YES' || myMtn2 === 'Y'){
  alert('No, he hasn\'t had a chance to do any hikes in the area yet...');
  console.log('You guessed wrong');
} else if(myMtn2 === ''){
  alert('You have to answer Yes or No');
}
else if(myMtn2 === 'NO' || myMtn2 === 'N'){
  alert('You\'re right. He hasn\'t had a chance to do any hikes in the area yet...');
  console.log('You\'re right!');
}
else{
  console.log('Yes or No answers please!');
}

//Guess a number question: Maximum 4 tries and correct answer is 12
var userAnswer = prompt('How many times has Luke been back and forth from Korea? Enter a numerical value:');
var guessLimit = 4;
var numGuesses = 0;

while (numGuesses < 3) {
  console.log(numGuesses);
  if (Number(userAnswer) > 12 && numGuesses < guessLimit) {
    userAnswer = prompt('That\'s too high. Try Again');
    numGuesses++;
  } else if(Number(userAnswer) < 12 && numGuesses < guessLimit) {
    userAnswer = prompt('That\'s too low. Try Again');
    numGuesses++;
  } else if(Number(userAnswer) === 12) {
    alert('That\'s Right!');
    break;
  }
}
if (numGuesses === 3) {
  alert('You\'re out of guesses....');
}

//Question with multiple correct answers
var guessLimit2 = 6;
var numGuesses2 = 0;
var statesTrain = ['South Carolina', 'California', 'Kentucky', 'Texas', 'Georgia'];

while (numGuesses2 < guessLimit2) {
  var userGuess = prompt('Name one of the states where Luke did training while in the Army');
  for (var i = 0; i < statesTrain.length; i++) {
    if (userGuess === statesTrain[i]) {
      console.log('Correct!');
      alert('Correct!');
      break;
    }else {
      continue;
    }
  }
  numGuesses2++;
  console.log(numGuesses2);
  alert('Wrong answer. Your guessed ' + userGuess + 'You have used ' + numGuesses2 + ' of 6 guesses. Try again');
}



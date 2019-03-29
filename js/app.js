'use strict';

//Name
var userName = prompt('Hey! What\'s your name?');

// Yes, Yes, No, No, No
var aboutQuestion = ['Did Luke spend most of his life in Tennessee','Does Luke speak a foreign language?','Is Luke an only child?','Does Luke have a pet at home?','Is Luke\'s favorite hike around Seattle Mt. Ranier?'];
var expectedYes = ['Yes','yes','y','Y'];
var expectedNo = ['No', 'no', 'N', 'n'];
var correctResponse = ['You are right! He spent his first 22 years there.','You are correct. He speaks Korean','You are right. He is one of 4 children.','Unfortunately you\'re right... No pets as of yet...','You\'re right. He hasn\'t had a chance to do any hikes in the area yet...'];
var incorrectResponse = ['Nope. He did spend most of his life in Tennessee.','Nah. He does speak a foreign language. Korean!','Nope. He has 2 sisters and 1 brother.','No, he hasn\'t had a chance to do any hikes in the area yet...','No, he hasn\'t had a chance to do any hikes in the area yet...'];

//First Five Questions:

function yesNoQuestion() {
  //5 Questions: some yes some no. 
  // prompt the question (loop through)/ user response
  for (var i = 0; i < aboutQuestion.length; i++){
    var answer = prompt(aboutQuestion[i]);
    // check if index <= 1 for yes
    if(i <= 1){
      // check if response is any of expectedYes values
      // if yes then alert correct
      // if response is not yes then alert you are wrong
      var incorrectAlert = null;
      for (var j = 0; j < expectedYes.length; j++){
        if(answer === expectedYes[j]){
          alert(correctResponse[i]);
          incorrectAlert = false;
          break;
        } else {
          incorrectAlert = true;
        }
      }
      if (incorrectAlert === true) {
        alert(incorrectResponse[i]);
      }
    }
    // check if index > 1 for no
    else if (i > 1){
      //console.log j so I could see if it had a value. Checking scope
      console.log(j);
      var incorrectAlert1 = null;
      for (var k = 0; k < expectedNo.length; k++){
        if(answer === expectedNo[k]){
          alert(correctResponse[i]);
          incorrectAlert1 = false;
          break;
        } else {
          incorrectAlert1 = true;
        }
      }
      if (incorrectAlert1 === true) {
        alert(incorrectResponse[i]);
      }
    }
    //check if response is any of expectedNo values
    //if yes then alert correct
    //if response is not no then alert you are wrong

  }
}
yesNoQuestion();


//Sixth Question. Guess a number question: Maximum 4 tries and correct answer is 12

var userAnswer = prompt('How many times has Luke been back and forth from Korea? Enter a numerical value:');
function numberOfTimes(userAnswer) {

  var guessLimit = 4;
  var numGuesses = 1;

  while (numGuesses <= guessLimit) { // change from 3 to guessLimit (4)
    console.log(numGuesses);
    if (Number(userAnswer) > 12) {
      userAnswer = prompt('That\'s too high. Try Again');
      numGuesses++;
    } else if (Number(userAnswer) < 12) {
      userAnswer = prompt('That\'s too low. Try Again');
      numGuesses++;
    } else if (Number(userAnswer) === 12) {
      alert('That\'s Right!');
      break;
    }
  }
  if (numGuesses > 4) {
    alert('You\'re out of guesses....');
  }
}

numberOfTimes(userAnswer);

//Seventh Question. A question with multiple correct answers

function whichState() {
  var guessLimit2 = 6;
  var numGuesses2 = 0;
  var statesTrain = ['South Carolina', 'California', 'Kentucky', 'Texas', 'Georgia'];
  var correct = false;

  while (numGuesses2 < guessLimit2) {
    var userGuess = prompt('Name one of the states where Luke did training while in the Army');
    for (var i = 0; i < statesTrain.length; i++) {
      if (userGuess === statesTrain[i]) {
        console.log('Correct!');
        alert(userName + '! That is correct!');
        numGuesses2 = guessLimit2 + 1;
        correct = true;
        break;
      }
    }
    if (correct === false) {
      numGuesses2++;
      console.log(numGuesses2);
      alert('Sorry ' + userName + ' that was the wrong answer. You guessed ' + userGuess + '. You now have used ' + numGuesses2 + ' of 6 guesses. Try again');
    } else {
      break;
    }
  }
}

whichState();

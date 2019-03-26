'use strict';

var myState = prompt('Did Luke spend most of his life in Tennessee');
if(myState === 'yes' || myState === 'Yes' || myState === 'Y' || myState === 'y'){
  alert('You are right! He spent his first 22 years there.');
} 
else if(myState === 'no' || myState === 'No' || myState === 'N' || myState === 'n'){
  alert('Nope. He did spend most of his life in Tennessee.');
}
else{
  console.log('Please answer either Yes or No. All questions follow Yes/No format!')
}

var myChild = prompt('Is Luke an only child?');
if(myChild === 'yes' || myChild === 'Yes' || myChild === 'Y' || myChild === 'y'){
  alert('Nope. He has 2 sisters and 1 brother.');
} else if(myChild === 'no' || myChild === 'No' || myChild === 'N' || myChild === 'n'){
  alert('You are right. He is one of 4 children.');
}
else{
  console.log('As I told you in question 1, all questions follow Yes/No format for answers')
}

var myLang = prompt('Does Luke speak a foreign language?');
if(myLang === 'yes' || myLang === 'Yes' || myLang === 'Y' || myLang === 'y'){
  alert('You are correct. He speaks Korean');
} else if(myLang === 'no' || myLang === 'No' || myLang === 'N' || myLang === 'n'){
  alert('Nah. He does speak a foreign language. Korean!');
}
else{
  console.log('Come on. Really?')
}

var myPet = prompt('Does Luke have a pet at home?');
if(myPet === 'yes' || myPet === 'Yes' || myPet === 'Y' || myPet === 'y'){
  alert('No.... He does\'t have a pet but really wants a cat and dog!');
} else if(myPet === 'no' || myPet === 'No' || myPet === 'N' || myPet === 'n'){
  alert('Unfortunately you\'re right... No pets as of yet...');
}
else{
  console.log('I told you to answer Yes or No!')
}

var myMtn = prompt('Is Luke\'s favorite hike around Seattle Mt. Ranier?');
if(myMtn === 'yes' || myMtn === 'Yes' || myMtn === 'Y' || myMtn === 'y'){
  alert('No, he hasn\'t had a chance to do any hikes in the area yet...');
} else if(myMtn === 'no' || myMtn === 'No' || myMtn === 'N' || myMtn === 'n'){
  alert('You\'re right. He hasn\'t had a chance to do any hikes in the area yet...');
}
else{
  console.log('I can\'t repeat myself again. Luckily this was the last question')
}
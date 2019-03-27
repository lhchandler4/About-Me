'use strict';

var myState = prompt('Did Luke spend most of his life in Tennessee');
if(myState === 'yes' || myState === 'Yes' || myState === 'Y' || myState === 'y'){
  alert('You are right! He spent his first 22 years there.');
  console.log('You\'re right!')
} 
else if(myState === 'no' || myState === 'No' || myState === 'N' || myState === 'n'){
  alert('Nope. He did spend most of his life in Tennessee.');
  console.log('You guessed wrong')
}
else{
  console.log('Please answer either Yes or No. All questions follow Yes/No format!')
}

var myChild = prompt('Is Luke an only child?');
if(myChild === 'yes' || myChild === 'Yes' || myChild === 'Y' || myChild === 'y'){
  alert('Nope. He has 2 sisters and 1 brother.');
  console.log('You guessed wrong')
} else if(myChild === 'no' || myChild === 'No' || myChild === 'N' || myChild === 'n'){
  alert('You are right. He is one of 4 children.');
  console.log('You\'re right!')
}
else{
  console.log('Yes or No answers please!')
}

var myLang = prompt('Does Luke speak a foreign language?');
if(myLang === 'yes' || myLang === 'Yes' || myLang === 'Y' || myLang === 'y'){
  alert('You are correct. He speaks Korean');
  console.log('You\'re right!')
} else if(myLang === 'no' || myLang === 'No' || myLang === 'N' || myLang === 'n'){
  alert('Nah. He does speak a foreign language. Korean!');
  console.log('You guessed wrong')
}
else{
  console.log('Yes or No answers please!')
}

var myPet = prompt('Does Luke have a pet at home?');
if(myPet === 'yes' || myPet === 'Yes' || myPet === 'Y' || myPet === 'y'){
  alert('No.... He does\'t have a pet but really wants a cat and dog!');
  console.log('You guessed wrong')
} else if(myPet === 'no' || myPet === 'No' || myPet === 'N' || myPet === 'n'){
  alert('Unfortunately you\'re right... No pets as of yet...');
  console.log('You\'re right!')
}
else{
  console.log('Yes or No answers please!')
}

//I turned this section into a commit to utilize .toUpperCase() in the next section
//var myMtn = prompt('Is Luke\'s favorite hike around Seattle Mt. Ranier?');
//if(myMtn === 'yes' || myMtn === 'Yes' || myMtn === 'Y' || myMtn === 'y'){
//  alert('No, he hasn\'t had a chance to do any hikes in the area yet...');
//} else if(myMtn === 'no' || myMtn === 'No' || myMtn === 'N' || myMtn === 'n'){
//  alert('You\'re right. He hasn\'t had a chance to do any hikes in the area ////yet...');
//}
//else{
//  console.log('Yes or No answers please!')
//}

var myMtn = prompt('Is Luke\'s favorite hike around Seattle Mt. Ranier?');
var myMtn2 = myMtn.toUpperCase();
  if (myMtn2 === 'YES' || myMtn2 === 'Y'){
  alert('No, he hasn\'t had a chance to do any hikes in the area yet...');
  console.log('You guessed wrong')
} else if(myMtn2 === ''){
  alert('You have to answer Yes or No')
}
  else if(myMtn2 === 'NO' || myMtn2 === 'N'){
  alert('You\'re right. He hasn\'t had a chance to do any hikes in the area ////yet...');
  console.log('You\'re right!')
}
else{
  console.log('Yes or No answers please!')
}
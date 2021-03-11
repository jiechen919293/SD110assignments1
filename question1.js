// How many sides on your dice? -10
// Sorry, that's not a valid size value. Please choose a positive number.
// How many sides on your dice? 6

// Thanks! Here we go ...

// 1. die number 1 is 5 and die number 2 is 3.
// 2. die number 1 is 2 and die number 2 is 2.
// 3. die number 1 is 1 and die number 2 is 5.
// 4. die number 1 is 5 and die number 2 is 1.
//    ... (these triple dots mean the output keeps going, but just not for the sample, so we save space)
// 5. die number 1 is 1 and die number 2 is 1.

// You got snake eyes! Finally! On try number 16!
// Along the way you rolled doubles 5 times
// The average roll for die #1 was 2.95
// The average roll for die #2 was 3.20


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function inputVaildNum(myNumber) {
    while (myNumber != 6) {
        console.log('Sorry, that \'s not a valid size value. Please choose a positive number.')
        myNumber = parseInt(prompt('How many sides on your dice?'));
    }
    console.log('Thanks! Here we go ...');
    return myNumber;
}

function getDice() {
    return getRandomInt(1, 6);
}

let myNumber = parseInt(prompt('How many sides on your dice?'));
inputVaildNum(myNumber);
let dice1 = getDice();
let dice2 = getDice();
let tryNum = 0;
let doubleNum = 0;
let sumDice1 = 0;
let sumDice2 = 0;

while (!(dice1 === 1 && dice2 === 1)) {
    tryNum += 1;
    dice1 = getDice();
    dice2 = getDice();
    console.log('die number 1 is ' + dice1 + ' and die number 2 is ' + dice2 + '.');
    sumDice1 += dice1;
    sumDice2 += dice2;
    if (dice1 === dice2) {
        doubleNum += 1;
    }
}

console.log('You got snake eyes! Finally! On try number ' + tryNum + '!');
console.log('Along the way you rolled doubles ' + doubleNum + ' times.');
console.log('The average roll for die #1 was ' + sumDice1 / tryNum + '.');
console.log('The average roll for die #2 was ' + sumDice2 / tryNum + '.');
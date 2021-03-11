//set the first try
let myNumber = parseInt(prompt('hey, enter a number between 1-100!', ''));

//function to get random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

//  function to get the vaild number
function inputVaildNum(myNumber) {
    while (!(myNumber >= 1 && myNumber <= 100)) {
        myNumber = parseInt(prompt('hey, enter a number between 1-100!', ''));
    }
    return myNumber;
}
// main loop for guess
let randomNum = getRandomInt(1, 100);
for (let i = 1; i <= 7; i++) {
    let guess = inputVaildNum(myNumber);
    if (guess == randomNum) {
        alert('You got it!');
        alert('The secret number was ' + randomNum + '.');
        alert('It only took you ' + i + ' guesses.');
        break;
    } else if (guess < randomNum) {
        alert('You guessed' + guess + '.')
        alert(guess + 'is too low. Guess again, you have ' + [7 - i] + ' guesses remaining.')

    } else {
        alert('You guessed' + guess + '.')
        alert(guess + 'is too high. Guess again, you have ' + [7 - i] + ' guesses remaining.')
    };

}
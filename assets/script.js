'use strict';
let score = 20;
let highScore = 0;
let btn = document.querySelector('#btn-chek');
let secNum = Math.trunc(Math.random() * 20) + 1;
//display message
const displayMess = (message) => {
    document.querySelector('.message').textContent = message;
}
btn.addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    //while no input!
    if (!guess) {
        displayMess('⛔ No number');
    }
    //while number is coreect
    else if (guess == secNum) {
        document.querySelector('.number').textContent = secNum;
        displayMess('🎉 Currect number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //while number is higher or lower
    else if (guess !== secNum) {
        if (score > 1) {
            displayMess(guess > secNum ? '📉 Too high!' : '📈 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMess('☠️ You Lose!');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
})

//play again
let againBTN = document.querySelector('.again');
againBTN.addEventListener('click', function () {
    score = 20;
    secNum = Math.trunc(Math.random() * 20) + 1;
    displayMess('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
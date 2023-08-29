'use strict';

// Variables
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// Adding functionality to the 'Check!' button
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // If there is no number
    if (!guess) {
        displayMessage('⛔ No Number!');

    // When the player guesses the correct number
    } else if (guess === secretNumber){
        displayMessage('👏 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // When current score is higher than the highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When the player guesses the wrong number
    } else if (guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
})

// Adding functionality to the 'Again!' button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');  // Message
    document.querySelector('.number').textContent = '?';  // Number
    document.querySelector('.score').textContent = 20;  // Score
    document.querySelector('.guess').value = ''; // Guess

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})
'use strict'
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0 = document.querySelector('player--0');
const player1 = document.querySelector('player--1');
const diceElement = document.querySelector('.dice');
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceElement.classList.add('hidden');
const buttonNew = document.querySelector('.btn--new');
const buttonDice = document.querySelector('.btn-dice');
const buttonHold = document.querySelector('.btn-hold');
let currentScore = 0;
let active = 0;
const score = [0, 0];
//Rolling Dice Functionality
buttonDice.addEventListener('click', () => {
    //Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1

    //Display the output
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //switch the player
    if (dice !== 1) {
        //Add dcie to current score
        currentScore += dice;
        document.getElementById(`score--${active}`).textContent = dice;
        document.getElementById(`current--${active}`).textContent = currentScore;
    }
    else {
        document.getElementById(`current--${active}`).textContent = 0;
        document.getElementById(`score--${active}`).textContent = 0;
        active = active === 1 ? 0 : 1;
        currentScore = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');

    }
})

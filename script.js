'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');

let scores, currentScore, activeplayer, playing;


const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activeplayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    diceEl.classList.add('hidden');
}
init();

const switchPlayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentScore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


//rolling dice functionality
btnroll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;

        }
        else {
            switchPlayer();

        }
    }
})

btnhold.addEventListener('click', function () {
    if (playing) {

        scores[activeplayer] += currentScore;

        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        if (scores[activeplayer] >= 30) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        }
        else {
            switchPlayer();
        }

    }
})

btnnew.addEventListener('click', init);






let btnRoll = document.querySelector('.btnRoll');
let dice = document.querySelector('.dice');
let playerOneCounter = document.querySelector('.player1 .counter');
let playerTwoCounter = document.querySelector('.player2 .counter');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let btnHold = document.querySelector('.btnHold');
let player1Score = document.querySelector('.player1Score');
let player2Score = document.querySelector('.player2Score');
let btnStart = document.querySelector('.btnStart');
const score = 100;
let counter1 = 0;
let counter2 = 0;
let final1 = 0;
let final2 = 0;

const imagesList = [
    'images/dice-1.png',
    'images/dice-2.png',
    'images/dice-3.png',
    'images/dice-4.png',
    'images/dice-5.png',
    'images/dice-6.png',
];
function changeClass() {
    playerOneCounter.textContent = 0;
    counter1 = 0;
    playerTwoCounter.textContent = 0;
    counter2 = 0;
    player1.classList.toggle('playerActive');
    player2.classList.toggle('playerActive');
}

function resetGame() {
    playerOneCounter.textContent = 0;
    counter1 = 0;
    counter2 = 0;
    final1 = final2 = 0;
    playerTwoCounter.textContent = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;

    if (player2.classList.contains('playerActive')) {
        player2.classList.remove('playerActive');
        player1.classList.add('playerActive');
    }

    if (player2.classList.contains('playerWin')) {
        player2.classList.remove('playerWin');
    }
    if (player1.classList.contains('playerWin')) {
        player1.classList.remove('playerWin');
    }
    addClassForBtns();
    dice.setAttribute('src', imagesList[0]);
}

function removeClassForBtns() {
    btnRoll.setAttribute('disabled', 'disabled');
    btnRoll.classList.remove('btn');
    btnRoll.classList.add('btnNoHover');

    btnHold.setAttribute('disabled', 'disabled');
    btnHold.classList.remove('btn');
    btnHold.classList.add('btnNoHover');
}
function addClassForBtns() {
    btnRoll.removeAttribute('disabled');
    btnRoll.classList.add('btn');
    btnRoll.classList.remove('btnNoHover');
    btnHold.removeAttribute('disabled');
    btnHold.classList.add('btn');
    btnHold.classList.remove('btnNoHover');
}

function checkPlayerWin() {
    if (Number(player1Score.textContent) >= score) {
        player1.classList.add('playerWin');
        removeClassForBtns();
    }
    if (Number(player2Score.textContent) >= score) {
        player2.classList.add('playerWin');
        removeClassForBtns();
    }
}

btnRoll.addEventListener('click', () => {
    const ranodomDigit = Math.floor(Math.random() * 6);
    let newRandomDigit = ranodomDigit + 1;

    dice.setAttribute('src', imagesList[ranodomDigit]);
    if (newRandomDigit === 1) {
        changeClass();
    } else {
        if (player1.classList.contains('playerActive')) {
            counter1 += newRandomDigit;
            playerOneCounter.textContent = counter1;
        } else {
            counter2 += newRandomDigit;
            playerTwoCounter.textContent = counter2;
        }
    }
});

btnHold.addEventListener('click', () => {
    if (player1.classList.contains('playerActive')) {
        final1 += counter1;
        player1Score.textContent = final1;
        changeClass();
    } else {
        final2 += counter2;
        player2Score.textContent = final2;
        changeClass();
    }
    checkPlayerWin();
});

btnStart.addEventListener('click', () => {
    resetGame();
});

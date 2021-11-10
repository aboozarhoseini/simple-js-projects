let inputNumber = document.querySelector('.inputNumber input');
let checkBtn = document.querySelector('.checkBtn button');
let statusSpan = document.querySelector('.showStatus span');
let showBoxSpan = document.querySelector('.showBox span');
let content = document.querySelector('.content');
let resetBtn = document.querySelector('.header button');
let timeOfChoose = document.querySelector('.timeOfChoose span');
let hightScore = document.querySelector('.hightScore span');
let newScore = document.querySelector('.newScore span');
let blackDiv = document.querySelector('.blackDiv');
let modalBox = document.querySelector('.modalBox');
let main = document.querySelector('.main');
let clearAllCores = document.querySelector('.clearAllCores');

const sevedNumber = Math.round(Math.random() * 20);
// let listItems = localStorage.getItem('score') ? JSON.stringify(localStorage.getItem('score')) : [];
let listItems = localStorage.getItem('score') == null ? [] : localStorage.getItem('score');
// let listItems = [];

// console.log(listItems); //!👈👈👈 for delete ...............................................

function decreesChance() {
    let showScoreNumber = Number(timeOfChoose.innerHTML);
    showScoreNumber--;
    if (showScoreNumber < 0) {
        alert('you lose');
        location.reload();
        return;
    }
    timeOfChoose.innerHTML = showScoreNumber;
    // timeOfChoose.classList.toggle('animated');
    if (timeOfChoose.className == 'animated') {
        timeOfChoose.classList.add('animated2');
        timeOfChoose.classList.remove('animated');
    } else {
        timeOfChoose.classList.remove('animated2');
        timeOfChoose.classList.add('animated');
    }
}

function showModalBox() {
    blackDiv.classList.toggle('blackDivVizible');
    modalBox.classList.add('modalBoxSlideDown');
}

function setScoreToLocal(arr) {
    if (listItems.length != 0) {
        let res = localStorageToArray(arr);
        localStorage.setItem('score', res);
    } else {
        listItems.push(arr);
        localStorage.setItem('score', listItems);
    }
}

function localStorageToArray(arr = null) {
    let resToNumber = [];
    if (listItems.length != 0) {
        listItems.split(',').forEach(element => {
            resToNumber.push(Number(element));
        });
        if (arr != null) resToNumber.push(arr);
    } else {
        resToNumber = [];
    }
    return resToNumber;
}

function getMaxNumber() {
    return Math.max(...localStorageToArray());
}

function createSpanScoreItems(text, arr, color) {
    let listOfScores = document.querySelector('.listOfScores');
    listOfScores.classList.add( 'listOfScores-show' );
    const listOfScoresSpan = document.createElement('span');
    listOfScoresSpan.classList.add('slideUp');
    listOfScoresSpan.innerHTML = `${text} is : ${arr}`;
    listOfScoresSpan.style.background = color;
    listOfScoresSpan.style.border = `1px solid`;
    listOfScores.appendChild(listOfScoresSpan);
    // localStorage.setItem('scoreItemLists', arr);
}

function showScoreItemList() {
    hightScore.innerHTML = localStorage.getItem('score') ? getMaxNumber() : 0;
    const sortedArray = localStorageToArray().sort((a, b) => b - a);
    for (let x = 0; x < sortedArray.length; x++) {
        if (x == 0) {
            createSpanScoreItems('hightScore', sortedArray[x], '#778899');
        } else {
            createSpanScoreItems('new Score', sortedArray[x], 'lightgreen');
        }
    }
}

function cangouragulation(e) {
    statusSpan.style.color = '#2cffa7';
    statusSpan.innerHTML = ` ✨🎉Cangouragulation...!!!🎉✨`;
    showBoxSpan.innerHTML = sevedNumber;
    content.style.backgroundColor = 'rgb(200 128 255)';
    e.target.style.backgroundColor = 'gray';
    e.target.setAttribute('disabled', 'disabled');
    inputNumber.setAttribute('disabled', 'disabled');
    e.target.innerHTML = 'disabled';
    newScore.innerHTML = timeOfChoose.innerHTML;
    newScore.classList.add('animatedWin');
    rain();
}

function rain() {
    const css = window.document.styleSheets[0];
    let myRandomForParticle;

    for (let x = 0; x < 100; x++) {
        const randomColor1 = Math.round(255 * Math.random());
        const randomColor2 = Math.round(255 * Math.random());
        const randomColor3 = Math.round(255 * Math.random());

        const randomRight = Math.round(100 * Math.random());
        const randomTop = Math.round(-200 * Math.random());
        let myRandom = Math.round(30 * Math.random());
        let myRandom2 = Math.round(95 * Math.random());
        let randomForTime = Math.round(2 * Math.random());
        myRandomForParticle = myRandom2;
        // myRandomForParticle = myRandom2 < 70 ? 70 : myRandom2;
        let randomWidthHeight = myRandom < 10 ? 15 : myRandom;

        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.classList.add(`particleStyle${x}`);
        particle.style.background = `rgb(${randomColor1} ${randomColor2} ${randomColor3})`;
        particle.style.right = `${randomRight}%`;
        particle.style.top = `${randomTop}%`;
        particle.style.height = `${randomWidthHeight}px`;
        particle.style.width = `${randomWidthHeight}px`;
        particle.style.border = 'solid 1px white';
        main.appendChild(particle);
        console.log(randomForTime);
        css.insertRule(`
        .particleStyle${x} {
            animation: moveParticle${x} ${randomForTime}s 1;
            animation-fill-mode: forwards;
        }
        `);
        css.insertRule(`
        @keyframes moveParticle${x} {
            0% {
                opacity: 1;
            }
            60%{
                opacity: 1;
            }
            100% {
                top: ${myRandomForParticle}%;
                opacity: 0;
            }
        }
        `);
    }
}

checkBtn.addEventListener('click', e => {
    let inputVal = inputNumber.value;
    if (inputVal > 20 || inputVal < 0 || inputVal == '') {
        // alert( 'press a numbeer between 0 to 20' );
        showModalBox();
    } else {
        if (inputVal > sevedNumber) {
            decreesChance();
            statusSpan.innerHTML = `📉 too hight!!!`;
        } else if (inputVal < sevedNumber) {
            statusSpan.innerHTML = `📈 too low!!!`;
            decreesChance();
        } else {
            cangouragulation(e);
            setScoreToLocal(newScore.innerHTML);
            createSpanScoreItems('new Score', newScore.innerHTML, 'lightgreen');
        }
    }
    inputNumber.value = '';
    // inputNumber.value = 0; //!👈👈👈 for delete ...............................................
});

resetBtn.addEventListener('click', e => {
    location.reload();
});

console.log(`number is : ${sevedNumber}`); //!👈👈👈 for delete ...............................................

blackDiv.addEventListener('click', () => {
    blackDiv.classList.toggle('blackDivVizible');
    modalBox.classList.remove('modalBoxSlideDown');
    // modalBox.classList.add('modalBoxSlideUp');
});

showScoreItemList();

clearAllCores.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

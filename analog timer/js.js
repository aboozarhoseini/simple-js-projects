const secondTimer = document.querySelector('.bx .digitTime');
const secTimer = document.querySelector('.bx .secTimer');
const minTimer = document.querySelector('.bx .minTimer');
const hourTimer = document.querySelector('.bx .hourTimer');

function showTime() {
    setTimeout(showTime, 1000);
    let myDate = new Date();
    let sec = myDate.getSeconds() < 10 ? `0${myDate.getSeconds()}` : myDate.getSeconds();
    let hour = myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours();
    let min = myDate.getMinutes() < 10 ? `0${ myDate.getMinutes() }` : myDate.getMinutes();
    // sec = min = hour = 30;

    secondTimer.textContent = `${hour} : ${min} : ${sec}`;
    // secTimer.style.transform = `rotateZ(${sec * 6}deg)`;
    secTimer.style.transform = `translate(0,-50%) rotateZ(${sec * 6 }deg)`;
    minTimer.style.transform = ` translate(-3.5px,-50%)  rotateZ(${min * 6}deg)`;
    hourTimer.style.transform = `translate(-8px,-50%) rotateZ(${hour * 30}deg)`;
}

showTime();

const digitalTimer = document.querySelector('.bx .digitTime');
const digitalHour = document.querySelector('.bx .digitTime .hour');
const digitalMin = document.querySelector('.bx .digitTime .min');
const digitalSec = document.querySelector('.bx .digitTime .sec');

const secTimer = document.querySelector('.bx .secTimer');
const minTimer = document.querySelector('.bx .minTimer');
const hourTimer = document.querySelector('.bx .hourTimer');

const rd_manu = document.querySelector('#rd_manu');
const rd_auto = document.querySelector('#rd_auto');
const setting_inputs = document.querySelectorAll('.setting_input');

function showTime() {
    let myDate = new Date();
    let editedHour = myDate.getHours() + myDate.getMinutes() / 60;
    let editedMin = myDate.getMinutes() + myDate.getSeconds() / 60;
    let sec = myDate.getSeconds() < 10 ? `0${ myDate.getSeconds() }` : myDate.getSeconds();
    
    for (let x = 0; x < rd_auto.getAttributeNames().length; x++) {
        if (rd_auto.getAttributeNames()[x] === 'checked') {
            setTimeout(showTime, 1000);

            let hour = myDate.getHours() < 10 ? `0${Math.trunc(editedHour)}` : Math.trunc(editedHour);
            let min = myDate.getMinutes() < 10 ? `0${Math.trunc(editedMin)}` : Math.trunc(editedMin);

            digitalHour.textContent = `${hour} : `;
            digitalMin.textContent = `${min} : `;
            digitalSec.textContent = sec;
            secTimer.style.transform = `translate(0,-50%) rotateZ(${sec * 6}deg)`;
            minTimer.style.transform = ` translate(-3.5px,-50%)  rotateZ(${editedMin * 6}deg)`;
            hourTimer.style.transform = `translate(-8px,-50%) rotateZ(${editedHour * 30}deg)`;
        } else {
            // editedMin = editedHour = sec = 0;
            // console.log('fsdfd');

        }
    }
}

showTime();

rd_auto.addEventListener('change', () => {
    setting_inputs.forEach(e => {
        e.setAttribute('disabled', 'disabled');
        showTime();
    });
});

rd_manu.addEventListener('change', () => {
    setting_inputs.forEach(e => {
        e.removeAttribute('disabled');
    });
});

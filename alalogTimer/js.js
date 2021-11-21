const digitalTimer = document.querySelector(".bx .digitTime");
const digitalHour = document.querySelector(".bx .digitTime .hour");
const digitalMin = document.querySelector(".bx .digitTime .min");
const digitalSec = document.querySelector(".bx .digitTime .sec");

const secTimer = document.querySelector(".bx .secTimer");
const minTimer = document.querySelector(".bx .minTimer");
const hourTimer = document.querySelector(".bx .hourTimer");

const rd_manu = document.querySelector("#rd_manu");
const rd_auto = document.querySelector("#rd_auto");
const setting_inputs = document.querySelectorAll(".setting_input");

const minInput = document.querySelector("#minInput");
const hourInput = document.querySelector("#hourInput");
const secInput = document.querySelector("#secInput");
let flag = true;

const btnSet = document.querySelector(".sectionSetBtn button");

let setTimeoutForClock;

class PersonalDate {
  date = new Date();
  minutes = this.date.getMinutes() + this.date.getSeconds() / 60;
  hours = this.date.getHours() + this.date.getMinutes() / 60;
  seconds = this.date.getSeconds();
}

let p,
  hour,
  min,
  sec,
  editedMins,
  editedHours = 0;
function showTime() {
  if (flag) {
    p = new PersonalDate();
    editedHours = p.hours;
    editedMins = p.minutes;
    hour = p.hours < 10 ? `0${Math.trunc(p.hours)}` : Math.trunc(p.hours);
    min = p.minutes < 10 ? `0${Math.trunc(p.minutes)}` : Math.trunc(p.minutes);
    sec = p.seconds < 10 ? `0${p.seconds}` : p.seconds;
  } else {
    let oldHour = Number(hourInput.value);
    let oldMin = Number(minInput.value);
    let oldSec = Number(secInput.value);
    oldSec++;
    if (oldSec > 59) {
      oldSec = 0;
      oldMin++;
    }
    if (oldMin > 59) {
      oldMin = 0;
      oldHour++;
    }


    if (oldHour < 10) {
      hour = `0${oldHour}`;
    } else {
      hour = (oldHour % 24 < 10) ?`0${oldHour % 24}` :oldHour % 24;
    }

    sec = oldSec < 10 ? `0${oldSec}` : oldSec;
    min = oldMin < 10 ? `0${oldMin}` : oldMin;
    editedHours = hour;
    editedMins = min;
  }

  digitalHour.textContent = `${hour} : `;
  digitalMin.textContent = `${min} : `;
  digitalSec.textContent = sec;
  secTimer.style.transform = `translate(0,-50%) rotateZ(${sec * 6}deg)`;
  minTimer.style.transform = ` translate(-3.5px,-50%)  rotateZ(${editedMins * 6}deg)`;
  hourTimer.style.transform = `translate(-8px,-50%) rotateZ(${editedHours * 30}deg)`;

  // add valur for inputs
  minInput.value = min;
  hourInput.value = hour;
  secInput.value = sec;

  setTimeoutForClock = setTimeout(showTime, 1000);
}

showTime();

const resetTime = () => {
  digitalHour.textContent = 0;
  digitalMin.textContent = 0;
  digitalSec.textContent = 0;
  secTimer.style.transform = `translate(0,-50%) rotateZ(${0}deg)`;
  minTimer.style.transform = ` translate(-3.5px,-50%)  rotateZ(${0}deg)`;
  hourTimer.style.transform = `translate(-8px,-50%) rotateZ(${0}deg)`;
  minInput.value = 0;
  hourInput.value = 0;
  secInput.value = 0;
  clearTimeout(setTimeoutForClock);
};

rd_auto.addEventListener("change", () => {
  flag = true;
  disableInputs();
  clearTimeout(setTimeoutForClock);
  showTime();
});

rd_manu.addEventListener("change", () => {
  flag = false;
  setting_inputs.forEach(e => {
    e.removeAttribute("disabled");
    e.setAttribute("placeholder", "0");
  });
  resetTime();
});

btnSet.addEventListener("click", e => {
  if (minInput.value === "" || secInput.value === "" || hourInput.value === "" || minInput.value < 0 || secInput.value < 0 || hourInput.value < 0) {
    alert("somethings is empty");
  } else {
    //   flag = true;
    showTime();
    e.target.setAttribute("disabled", "disabled");
    disableInputs();
  }
});

function disableInputs() {
  setting_inputs.forEach(e => {
    e.setAttribute("disabled", "disabled");
  });
}

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let modalSlid = document.querySelector('.modalSlid');
let modalScale = document.querySelector('.modalScale');
let modalOpacity = document.querySelector('.modalOpacity');
let main = document.querySelector('.main');
let body = document.querySelector('body');
let cover = document.querySelector('.cover');

const blur = () => {
    main.classList.add('blur');
    cover.classList.add('cover-visable');
};

const unBlur = () => {
    modalOpacity.classList.remove('modalOpacityAnim');
    modalScale.classList.remove('modalScaleAnim');
    modalSlid.classList.remove('modalMovDown');
    cover.classList.remove('cover-visable');
    main.classList.remove('blur');
};

btn1.addEventListener('click', () => {
    modalSlid.classList.add('modalMovDown');
    blur();
});

btn2.addEventListener('click', () => {
    modalScale.classList.add('modalScaleAnim');
    blur();
});

btn3.addEventListener('click', () => {
    modalOpacity.classList.add('modalOpacityAnim');
    blur();
});

cover.addEventListener('click', () => {
    unBlur();
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        unBlur();
    }
});

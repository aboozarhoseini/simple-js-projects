const akey = document.querySelector('.Akey');
const skey = document.querySelector('.Skey');
const dkey = document.querySelector('.Dkey');
const fkey = document.querySelector('.Fkey');
const gkey = document.querySelector('.Gkey');
const hkey = document.querySelector('.Hkey');
const jkey = document.querySelector('.Jkey');
const kkey = document.querySelector('.Kkey');
const lkey = document.querySelector('.Lkey');

// document.addEventListener('keydown', e => {
//     switch (e.key) {
//         case 'a':
//             akey.classList.add('keyLight');
//             // new Audio(`./sounds/clap.wav`).play();
//             break;
//         case 's':
//             skey.classList.add('keyLight');
//             // new Audio(`./sounds/boom.wav`).play();
//             break;
//         case 'd':
//             dkey.classList.add('keyLight');
//             // new Audio(`./sounds/hihat.wav`).play();
//             break;
//         case 'f':
//             fkey.classList.add('keyLight');
//             // new Audio(`./sounds/kick.wav`).play();
//             break;
//         case 'g':
//             gkey.classList.add('keyLight');
//             // new Audio(`./sounds/openhat.wav`).play();
//             break;
//         case 'h':
//             hkey.classList.add('keyLight');
//             // new Audio(`./sounds/ride.wav`).play();
//             break;
//         case 'j':
//             jkey.classList.add('keyLight');
//             // new Audio(`./sounds/snare.wav`).play();
//             break;
//         case 'k':
//             kkey.classList.add('keyLight');
//             // new Audio(`./sounds/tink.wav`).play();
//             break;
//         case 'l':
//             lkey.classList.add('keyLight');
//             // new Audio(`./sounds/tom.wav`).play();
//             break;
//         default:
//             console.log('no');
//             break;
//     }
// });

// document.addEventListener('keyup', e => {
//     switch (e.key) {
//         case 'a':
//             akey.classList.remove('keyLight');
//             break;
//         case 's':
//             skey.classList.remove('keyLight');
//             break;
//         case 'd':
//             dkey.classList.remove('keyLight');
//             break;
//         case 'f':
//             fkey.classList.remove('keyLight');
//             break;
//         case 'g':
//             gkey.classList.remove('keyLight');
//             break;
//         case 'h':
//             hkey.classList.remove('keyLight');
//             break;
//         case 'j':
//             jkey.classList.remove('keyLight');
//             break;
//         case 'k':
//             kkey.classList.remove('keyLight');
//             break;
//         case 'l':
//             lkey.classList.remove('keyLight');
//             break;
//         default:
//             console.log('no');
//             break;
//     }
// });



window.addEventListener('keydown', e => {
    const key = document.querySelector(`div[data-key=${e.key}]`);
    const myAudio = document.querySelector(`audio[data-key=${e.key}]`);
    if (!myAudio) return;
    myAudio.currentTime = 0;
    myAudio.play();
    if (!key) return;
    key.classList.add('keyLight');
});

// window.addEventListener('keyup', e => {
//     const key = document.querySelector( `div[data-key=${ e.key }]` );
//     if( !key ) return;
//     key.classList.remove('keyLight');
// } );

const removeClass = e => {
        e.target.classList.remove('keyLight');
};
const allDiv = Array.from(document.querySelectorAll('.boxDiv'));
allDiv.forEach(f => f.addEventListener('transitionend', removeClass));

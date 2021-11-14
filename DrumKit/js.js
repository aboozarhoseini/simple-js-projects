const akey = document.querySelector('.Akey');
const skey = document.querySelector('.Skey');
const dkey = document.querySelector('.Dkey');
const fkey = document.querySelector('.Fkey');
const gkey = document.querySelector('.Gkey');
const hkey = document.querySelector('.Hkey');
const jkey = document.querySelector('.Jkey');
const kkey = document.querySelector( '.Kkey' );




document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'a':
            akey.classList.add('keyLight');
            break;
        case 's':
            skey.classList.add('keyLight');
            break;
        case 'd':
            dkey.classList.add('keyLight');
            break;
        case 'f':
            fkey.classList.add('keyLight');
            break;
        case 'g':
            gkey.classList.add('keyLight');
            break;
        case 'h':
            hkey.classList.add('keyLight');
            break;
        case 'j':
            jkey.classList.add('keyLight');
            break;
        case 'k':
            kkey.classList.add('keyLight');
            break;
        default:
            console.log('no');
            break;
    }
});


document.addEventListener('keyup', e => {
    switch (e.key) {
        case 'a':
            akey.classList.remove('keyLight');
            break;
        case 's':
            skey.classList.remove('keyLight');
            break;
        case 'd':
            dkey.classList.remove('keyLight');
            break;
        case 'f':
            fkey.classList.remove('keyLight');
            break;
        case 'g':
            gkey.classList.remove('keyLight');
            break;
        case 'h':
            hkey.classList.remove('keyLight');
            break;
        case 'j':
            jkey.classList.remove('keyLight');
            break;
        case 'k':
            kkey.classList.remove('keyLight');
            break;
        default:
            console.log('no');
            break;
    }
});


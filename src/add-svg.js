import Lemon from './lemon.svg';

function addSvg() {
    const img = document.createElement('img');
    img.alt = 'Lemon';
    img.width = 50;
    img.src = Lemon;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addSvg();

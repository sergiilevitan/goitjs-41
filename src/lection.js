import { cars } from './cars.js';

const output = document.querySelector('.js-output');
const clearBtn = document.querySelector('.js-clear');

window.addEventListener('keydown', keyDown);
clearBtn.addEventListener('click', onClearOutput )

function keyDown(evt) {
    output.textContent += evt.key
}

function onClearOutput() {
    
    output.textContent = ' ';
    
}
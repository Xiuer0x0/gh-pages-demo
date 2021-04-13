import './style.scss';

const $h1 = document.createElement('h1');
$h1.innerText = `Hello`;

document.querySelector('body')?.append($h1);

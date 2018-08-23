import { text } from './const';

console.log('text:  ', text);


window.addEventListener('load', () => {
    document.body.innerHTML = `<h1>${text}</h1>`
});
const quote = document.getElementById ('quote');
const author = document.getElementById('author');
const button = document.getElementById ('next');

let numQuote = 0;
let numQuote1 = [0];
button.addEventListener('click', () => {
  do {
    numQuote = Math.floor(Math.random() * quotes.length);
  } while (numQuote1[numQuote1.length - 1] === numQuote);
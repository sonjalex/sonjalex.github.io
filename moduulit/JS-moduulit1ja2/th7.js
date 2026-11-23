"use strict";

let maara = parseInt(prompt("Montako kertaa noppaa heitetään? "));

let summa = 0;

for (let i = 0; i < maara; i++) {
    const noppa = Math.floor(Math.random() * 6) + 1;
    summa += noppa;
}

console.log(`Noppaa heitettiin ${maara} kertaa ja heittojen summa on: ${summa}`);

let teksti = document.querySelector("#summa")
teksti.textContent = `Noppaa heitettiin ${maara} kertaa ja heittojen summa on: ${summa}!`;
"use strict";

let teksti = document.querySelector("#lista");

const luvut = [];

for (let i = 1; i <= 5; i++) {
    const luku = parseInt(prompt(`Anna ${i}. luku: `));
    luvut.push(luku);
}

for (let i = 0; i < Math.floor(luvut.length / 2); i++) {
    let temp = luvut[i];
    luvut[i] = luvut[luvut.length - 1 - i];
    luvut[luvut.length - 1 - i] = temp;
}

teksti.textContent = luvut;
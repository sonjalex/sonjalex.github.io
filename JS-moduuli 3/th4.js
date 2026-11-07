"use strict";

const luvut = [];

let luku = "";
do {
    luku = parseInt(prompt("Syötä luku: "));
    luvut.push(luku);
} while (luku != 0);

luvut.sort((a, b) => b - a);

console.log(luvut)
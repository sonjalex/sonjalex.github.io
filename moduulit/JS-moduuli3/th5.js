"use strict";

const luvut = [];

while (true) {
    let luku = parseInt(prompt("Syötä luku: "));

    if (luvut.includes(luku)) {
        console.log("Luku on jo annettu");
        break;
    }
    luvut.push(luku);
}

luvut.sort((a, b) => a - b);

console.log(luvut)
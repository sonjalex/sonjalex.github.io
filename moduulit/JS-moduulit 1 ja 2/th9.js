"use strict";

let kokonaisluku = parseInt(prompt("Syötä kokonaisluku: "));
let teksti = document.querySelector("#kokonaisluku");

function alkuluku(kokonaisluku) {
    if (kokonaisluku <= 1){
        return "Luku ei ole alkuluku";
    }

    let raja = Math.floor(kokonaisluku ** 0.5) + 1;

    for (let x = 2; x < raja; x++) {
        if (kokonaisluku % x === 0) {
            return "Ei ole alkuluku";
        }
    }
    
    return "Luku on alkuluku";
}

teksti.textContent = alkuluku(kokonaisluku);
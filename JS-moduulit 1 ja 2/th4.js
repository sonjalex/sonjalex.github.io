"use strict";

let nimi = prompt("Mikä on nimesi?");
let teksti = document.querySelector("#nimi");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arvottu = random(1, 4);
let tupa = "";

if (arvottu == 1) {
    tupa = "Rohkelikko";
} else if (arvottu == 2) {
    tupa = "Luihuinen";
} else if (arvottu == 3) {
    tupa = "Puuskupuh";
} else {
    tupa = "Korpinkynsi";
}

teksti.textContent = `Hei, ${nimi}, olet ${tupa}!`;
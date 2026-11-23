"use strict";

let nimi = prompt("Mikä on nimesi?");
console.log("Hei, " + nimi, "!");

let teksti = document.querySelector("#teksti")
teksti.textContent = `Hei, ${nimi}!`;
"use strict";

let vuosi = prompt("Syötä vuosi: ");
let teksti = document.querySelector("#vuosi");

function karkausVuosi(vuosi) {
    if (vuosi % 100 === 0 ? vuosi % 400 === 0 : vuosi % 4 === 0)
        teksti.textContent = `${vuosi} on karkausvuosi!`;
    else
        teksti.textContent = `${vuosi} ei ole karkausvuosi!`;
}

karkausVuosi(vuosi);
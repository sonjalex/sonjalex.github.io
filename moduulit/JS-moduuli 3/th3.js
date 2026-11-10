"use strict";

let teksti = document.querySelector("#lista");
const list = document.getElementById('lista');

const nimet = [];

for (let i = 1; i < 7; i++) {
    const nimi = prompt(`Anna ${i}. koiran nimi: `);
    nimet.push(nimi);
}

nimet.sort();
nimet.reverse();

for (let i = 0; i < nimet.length; i++) {
    const lista = document.createElement('li');
    lista.textContent = nimet[i];
    list.appendChild(lista);
}
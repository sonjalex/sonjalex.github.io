"use strict";

let teksti = document.querySelector("#lista");
const list = document.getElementById('lista');

const maara = parseInt(prompt("Kuinka monta osallistujaa? "));

const nimet = [];

for (let i = 1; i <= maara; i++) {
    const nimi = prompt(`Anna ${i}. osallistujan nimi: `);
    nimet.push(nimi);
}

nimet.sort();

for (let i = 0; i < nimet.length; i++) {
    const lista = document.createElement('li');
    lista.textContent = nimet[i];
    list.appendChild(lista);
}
"use strict";

//1
const target = document.getElementById("target");
const p = document.createElement("p");
p.innerText = "Kappale tekstiä";
target.appendChild(p);

//2
const div = document.createElement("div")
const otsikko = document.createElement("h1");
otsikko.innerText = "Tämä on H1-tason otsikko";
div.appendChild(otsikko);
target.appendChild(div);

//3
const ul = document.createElement("ul");
const eka = document.createElement("li");
const toka = document.createElement("li");
eka.innerText = "Listan eka asia";
toka.innerText = "Listan toka asia";
ul.appendChild(eka);
ul.appendChild(toka);
div.appendChild(ul);
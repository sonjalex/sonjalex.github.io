"use strict";

document.getElementById("laske").addEventListener("click", () => {
    let luku1Input = document.querySelector("#luku1")
    let luku1 = parseInt(luku1Input.value)
    let luku2Input = document.querySelector("#luku2")
    let luku2 = parseInt(luku2Input.value)
    let luku3Input = document.querySelector("#luku3")
    let luku3 = parseInt(luku3Input.value)

    let summa = luku1 + luku2 + luku3
    let tulo = luku1 * luku2 * luku3
    let keskiarvo = (luku1 + luku2 + luku3) / 3

    let lasku1 = document.querySelector("#summa")
    lasku1.textContent = `Summa: ${summa}`
    let lasku2 = document.querySelector("#tulo")
    lasku2.textContent = `Tulo: ${tulo}`
    let lasku3 = document.querySelector("#keskiarvo")
    lasku3.textContent = `Keskiarvo: ${keskiarvo}`
})
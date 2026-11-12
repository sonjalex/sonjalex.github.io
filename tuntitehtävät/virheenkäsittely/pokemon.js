async function fetchData() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        if (response.ok ) {
            const response_data = await response.json()
            return response_data
        } else {
            throw new Error(`HTTP-virhe! Data ei ole haettu oikein: ${response.status}`)
        }
} catch (error) {
    console.log(`Virhe dataa haettaessa: ${error}`)
}

}

async function createPokemonView() {
    let lupaus = await fetchData()
    console.log(lupaus)
    const pokemonDiv = document.querySelector("#poke-content");
    for (let pokemon of lupaus.results) {
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name;
        pokemonDiv.appendChild(pokemonText);
    }
}
console.log("hi")
createPokemonView()
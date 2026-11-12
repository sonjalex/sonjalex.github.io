async function fetchData(osoite) {
    try {
        const response = await fetch(osoite)
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

async function handle_pokemon_click() {
    console.log("pokemon")
}

async function createPokemonView() {
    let lupaus = await fetchData("https://pokeapi.co/api/v2/pokemon")
    console.log(lupaus)
    const pokemonDiv = document.querySelector("#poke-content");
    for (let pokemon of lupaus.results) {
        console.log(pokemon)
        let pokemonText = document.createElement("p");
        pokemonText.textContent = pokemon.name;
        pokemonDiv.appendChild(pokemonText);
    }
}
console.log("hi")
createPokemonView()
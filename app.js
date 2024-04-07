
const API = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = async(name) => {
    try {
        const url = `${API}${name}`;
        const res = await fetch(url);
        const data = await res.json();
        let pokemon = document.getElementById("pokemon");
        pokemon.innerHTML = `
            <img src="${data.sprites.front_default}"/>
            <h1>${data.name}</h1>
        `;         
    } catch (error) {
        console.log(error);
        pokemon.innerHTML = `
            <h1>Pokemon no encontrado</h1>
        `;
    }

}

document.getElementById("buscarPokemon").addEventListener("click", () => {
    const pokemonName = document.getElementById("name").value;
    getPokemon(pokemonName);
});



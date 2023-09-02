import { getPokemonsApi, getPokemonsByUrl } from '../Api/PokemonApi';

export const loadPokemons = async () => {
    try {
        const response = await getPokemonsApi();
        const pokemons = response.results;

        const urlPromises = await response.results.map(async (item) => {
            const pokeDetails = await getPokemonsByUrl(item.url)
            return (pokeDetails)
        })
        const url = await Promise.all(urlPromises);
        return { url };
    } catch (error) {
        console.error(error.message);
        return [];
    }
};



// Exportar la función para usarla en otros componentes

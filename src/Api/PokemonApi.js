import { POKEMON_API_URL } from '../utils/Constants';

export const getPokemonsApi = async (limit = 10, offset = 0) => {
    try {
        const url = `${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error('Failed to fetch Pokémon data');
    }
};

export const getPokemonsByUrl = async (url) => {
    try {
        const poke = []
        const response = await fetch(url);
        const result = await response.json();
        poke.push({
            id: result.id,
            name: result.name,
            type: result.types[0].type.name,
            order: result.order,
            image: result.sprites.other['official-artwork']
        })
        return poke
    } catch (error) {
        console.log(error.ErrorMessage);
    }
}
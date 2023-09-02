import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { loadPokemons } from '../utils/loadPokemons'; // Importar la función desde el nuevo archivo
import { PokemonList } from '../components/PokemonList.jsx'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const PokedexScreen = () => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        const fetchPokemons = async () => {
            const fetchedPokemons = await loadPokemons();
            setPokemon(fetchedPokemons);
        };
        fetchPokemons();
    }, []);

    return (
        <View style={styles.container}>
            <PokemonList pokemons={pokemon} />
        </View>
    );
};

//export default React.memo(PokedexScreen);

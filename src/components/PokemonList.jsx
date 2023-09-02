import { StyleSheet, Text, FlatList, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    // Define tus estilos aquí si los necesitas
})

export const PokemonList = (props) => {
    const { pokemons } = props

    const renderPokemon = ({ item }) => (
        <View style={styles.pokemonItem}>
            <Text>{item.name}</Text>
        </View>
    )

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(key) => key.map((k) => k.id)}
            renderItem={({ item }) => item.map((pokemon) => <Text>{pokemon.name}</Text>)}
        />
    )
}
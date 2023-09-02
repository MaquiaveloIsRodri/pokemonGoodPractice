import React from 'react';
import { renderPokeball } from '../TabIcons';

export const getPokedexScreenOptions = () => {
    return {
        tabBarLabel: "",
        tabBarIcon: renderPokeball,
    };
};

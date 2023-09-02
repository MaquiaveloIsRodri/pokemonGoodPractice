import React from 'react';
import { Image } from 'react-native';

export const TabIcons = ({ state, descriptors, navigation }) => { };

export const renderPokeball = () => (
    <Image
        source={require('./../../Assets/pokeball.webp')}
        style={{ width: 75, height: 75, top: -18 }}
    />
);
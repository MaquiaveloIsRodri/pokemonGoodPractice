import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const getFavoriteScreenOptions = () => {
    return {
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
    };
};

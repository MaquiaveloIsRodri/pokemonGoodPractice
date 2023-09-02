import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export const getAccountScreenOptions = () => {
    return {
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ color, size }) => <Icon name='person' color={color} size={size} />,
    };
};

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokedexScreen } from '../../screens/PokedexScreen';


const stack = createNativeStackNavigator();

const AccountStackNavigation = () => (
    <stack.Navigator>
        <stack.Screen
            name="Pokedex"
            component={PokedexScreen}
            options={{ title: 'Pokedex' }}
        />
        <stack.Screen
            name="Pokemon"
            component={PokedexScreen}
        />
    </stack.Navigator>
);

export default AccountStackNavigation;
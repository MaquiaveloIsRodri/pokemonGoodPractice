import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from '../../screens/Favorite';


const stack = createNativeStackNavigator();

const FavoriteStackNavigation = () => (
    <stack.Navigator>
        <stack.Screen
            name="Favorite Stack"
            component={Favorite}
            options={{ title: 'Favoritos' }}
        />
    </stack.Navigator>
);

export default FavoriteStackNavigation;
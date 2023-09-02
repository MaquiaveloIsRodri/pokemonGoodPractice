import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getScreenOptions, getAccountScreenOptions, getPokedexScreenOptions, getFavoriteScreenOptions } from './screenOptionsTab';
import Account from '../StackNavegation/AccountStackNavegation';
import pokedex from '../StackNavegation/PokedexStackNavegation';
import Favorite from '../StackNavegation/FavoriteStackNavegation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator
        screenOptions={getScreenOptions()}
    >
        <Tab.Screen
            name="Cuenta"
            component={Account}
            options={getAccountScreenOptions()}
        />
        <Tab.Screen
            name="Pokedex init"
            component={pokedex}
            options={getPokedexScreenOptions()}
        />
        <Tab.Screen
            name="Favoritos"
            component={Favorite}
            options={getFavoriteScreenOptions()}
        />
    </Tab.Navigator>
);

export default TabNavigation;

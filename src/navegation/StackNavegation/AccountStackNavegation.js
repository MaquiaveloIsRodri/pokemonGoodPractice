import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../screens/AccountScreen';


const stack = createNativeStackNavigator();

const AccountStackNavigation = () => (
    <stack.Navigator
        screenOptions={{ title: 'Mi cuenta' }}
    >
        <stack.Screen
            name="account"
            component={Account}
            options={{ title: "Mi cuenta" }}
        />
    </stack.Navigator>
);

export default AccountStackNavigation;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home1 from '../screens/home1'
import Home2 from '../screens/home2'

const HomeNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="home-1" component={Home1} />
            <Stack.Screen name="home-2" component={Home2} />
        </Stack.Navigator>
    );
};

export default HomeNavigation;

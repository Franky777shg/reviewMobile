import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Search1 from '../screens/search1'
import Search2 from '../screens/search2'

const SearchNavigation = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="search-1" component={Search1} />
            <Stack.Screen name="search-2" component={Search2} />
        </Stack.Navigator>
    );
};

export default SearchNavigation;

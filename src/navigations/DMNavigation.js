import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import DM1 from '../screens/dm1'
import DM2 from '../screens/dm2'

const DMNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="dm-1" component={DM1} />
            <Tab.Screen name="dm-2" component={DM2} />
        </Tab.Navigator>
    );
};

export default DMNavigation;

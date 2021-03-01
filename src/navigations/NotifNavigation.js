import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Notif1 from '../screens/notification1'
import Notif2 from '../screens/notification2'

const NotifNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="notif-1" component={Notif1} />
            <Tab.Screen name="notif-2" component={Notif2} />
        </Tab.Navigator>
    );
};

export default NotifNavigation;

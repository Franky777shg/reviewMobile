import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile1 from '../screens/profile1'
import Profile2 from '../screens/profile2'

const ProfileNavigation = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name="profile-1" component={Profile1} />
            <Tab.Screen name="profile-2" component={Profile2} />
        </Tab.Navigator>
    );
};

export default ProfileNavigation;

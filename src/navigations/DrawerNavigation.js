import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home_Nav from '../navigations/HomeNavigation'
import Search_Nav from '../navigations/SearchNavigation'
import Notif_Nav from '../navigations/NotifNavigation'
import DM_Nav from '../navigations/DMNavigation'
import Profile_Nav from '../navigations/ProfileNavigation'

const DrawerNavigation = () => {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home-nav" component={Home_Nav} />
            <Drawer.Screen name="search-nav" component={Search_Nav} />
            <Drawer.Screen name="notif-nav" component={Notif_Nav} />
            <Drawer.Screen name="dm-nav" component={DM_Nav} />
            <Drawer.Screen name="profile-nav" component={Profile_Nav} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

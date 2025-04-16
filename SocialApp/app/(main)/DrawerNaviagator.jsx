import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer';
import Home from './home';
import ProfileScreen from './profile';
import NotificationScreen from "./notification";

const DrawerNaviagator = () => {
    return (
       <Drawer >
        <Drawer.Screen
        name='Home'
        options={{
            drawerLabel:'Home Screen',
            title:'Home',
        }}/>
       </Drawer>
    )
}

export default DrawerNaviagator
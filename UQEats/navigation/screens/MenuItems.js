import React from "react";
import About from "../../components/About";
import { View } from "react-native";
import MenuItem from "../../components/MenuItem";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MenuItems = () => {
    return (
        <View>
            <About />
            <MenuItem />
        </View>

    );
}

export default MenuItems;
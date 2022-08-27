import React from "react";
import AboutGuzman from "../components/AboutGuzman";
import { View } from "react-native";
import MenuItemGuzman from "../components/MenuItemGuzman";

const MenuItemsGuzman = () => {
    return (
        <View>
            <AboutGuzman />
            <MenuItemGuzman />
        </View>
    );
}

export default MenuItemsGuzman;
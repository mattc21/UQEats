import React from "react";
import About from "../components/About";
import { View } from "react-native";
import MenuItem from "../components/MenuItem";

const MenuItems = () => {
    return (
        <View>
            <About />
            <MenuItem />
        </View>

    );
}

export default MenuItems;
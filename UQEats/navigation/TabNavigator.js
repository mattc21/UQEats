import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={ConfirmationScreen} />
            <Tab.Screen name="Order" component={ConfirmationScreen} />
        </Tab.Navigator>
    )    
}
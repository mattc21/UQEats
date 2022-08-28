import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import { HomeStack } from "./HomeStack";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}} tabBar/>
            <Tab.Screen name="Cart" component={LoginScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Order" component={ConfirmationScreen}options={{headerShown: false}} />
        </Tab.Navigator>
    )    
}
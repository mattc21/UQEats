import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuItem from "../components/MenuItem";
import { Menu } from "react-native-paper";
import MenuItems from "../screens/MenuItems";

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name="kenko" component={MenuItems} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

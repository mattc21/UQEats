import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuItem from "../components/MenuItem";
import { Menu } from "react-native-paper";
import MenuItems from "../screens/MenuItems";
import RegisterScreen from "../screens/RegisterScreen";
import MenuItemsGuzman from "../screens/MenuItemsGuzman";
import { TabNavigator } from "./TabNavigator";

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen options={{tabBar, headerShown: false}} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="MenuItemsGuzman" component={MenuItemsGuzman} options={{headerShown: false}} />
            <Stack.Screen name="MenuItems" component={MenuItems} options={{headerShown: false}} />
            <Stack.Screen name="Registration" component={RegisterScreen} options={{headerShown: false}} />
            
        </Stack.Navigator>
    )
}

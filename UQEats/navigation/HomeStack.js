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
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuItemsGuzman"
        component={MenuItemsGuzman}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MenuItems"
        component={MenuItems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator initialRouteName="LoginScreen">
            <Screen name="LoginScreen" component={LoginScreen}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default AppNavigator;
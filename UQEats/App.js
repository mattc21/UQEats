import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MenuItems from "./screens/MenuItems";
import MenuItemsGuzman from "./screens/MenuItemsGuzman";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import { TabNavigator } from './navigation/TabNavigator';
import { HomeStack } from './navigation/HomeStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper'
import Tabs from './navigation/tabs';
import AreaNavigator from './screens/AreaNavigator';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MenuItems from "./screens/MenuItems";
import MenuItemsGuzman from "./screens/MenuItemsGuzman";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    // <PaperProvider>
    //   <LoginScreen />
    // </PaperProvider>
    
    <PaperProvider>
        <AppNavigator />
    </PaperProvider>


    // <AreaNavigator />

    // <ConfirmationScreen/>

    // <MenuItemsGuzman />
  );
}
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider, TextInput, Button} from 'react-native-paper'
import Tabs from './navigation/tabs';
import AreaNavigator from './screens/AreaNavigator';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  return (
    // <PaperProvider>
    //   <LoginScreen />
    // </PaperProvider>
    
    // <NavigationContainer>
    //   <Tabs />
    // </NavigationContainer>

    // <AreaNavigator />

    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

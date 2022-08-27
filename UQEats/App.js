import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainContainer from './navigation/MainContainer';
import MenuItems from './navigation/screens/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


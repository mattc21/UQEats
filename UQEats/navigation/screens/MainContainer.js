import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./HomeScreen";
import Cart from "./Cart";
import Order from "./Order";

const homeName = 'Home';
const cartName = 'Cart';
const orderName = 'Order';

const Tab = createBottomTabNavigator();

function MainContainer() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === cartName) {
                iconName = focused ? 'cart' : 'cart-outline';
  
              } else if (rn === orderName) {
                iconName = focused ? 'book' : 'book-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
          }}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={cartName} component={Cart} />
          <Tab.Screen name={orderName} component={Order} />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  export default MainContainer;
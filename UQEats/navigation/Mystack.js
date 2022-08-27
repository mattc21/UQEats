import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantItem from '../components/RestaurentItem';
import MenuItems from './screens/MenuItems';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Resturant"
          component={RestaurantItem}
          options={{ title: 'Back' }}

        />
        <Stack.Screen name="Menu" component={MenuItems}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MyStack;
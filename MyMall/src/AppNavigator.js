import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Address from './components/common/Address';
import AddAddress from './components/common/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSuccess from './Screens/OrderSuccess';
import MyOrders from './Screens/MyOrders';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;

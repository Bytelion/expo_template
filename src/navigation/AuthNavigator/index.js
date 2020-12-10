import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '@components/screens/Login';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;

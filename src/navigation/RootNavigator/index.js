import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from '@navigation/HomeNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;

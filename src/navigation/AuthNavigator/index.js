import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '@components/common/theme';
import SignInScreen from '@screens/Auth';
import SignUpScreen from '@screens/Auth/SignUp';
import WelcomeScreen from '@screens/Auth/Welcome';
import { knockout } from '../options';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      ...knockout,
    }}
  >
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerShown: true,
        title: 'Sign Up',
      }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: true,
        title: '',
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;

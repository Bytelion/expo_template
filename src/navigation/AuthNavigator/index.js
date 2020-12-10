import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '@components/common/theme';
import SignInScreen from '@components/screens/Auth';
import SignUpScreen from '@components/screens/Auth/SignUp';
import WelcomeScreen from '@components/screens/Auth/Welcome';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: colors.background,
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{
        headerShown: true,
        title: '',
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

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@components/screens/Home';
import { colors } from '@components/common/theme';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primaryBlue,
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;

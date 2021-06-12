import React from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import { Touchable } from '@components/common/Layout';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { removeAuth } from '@store/actions/auth';
import { base } from '../options';

const logout = (navigation) => {
  Alert.alert('Logout', 'Are you sure you would like to logout?', [
    { text: 'No', style: 'cancel' },
    {
      text: 'Yes',
      onPress: () => {
        removeAuth();

        navigation.navigate('SignIn');
      },
    },
  ]);
};

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      ...base,
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: 'HomeNavigator',
        headerLeft: () => {},
        headerRight: () => (
          <Touchable
            onPress={() => logout(navigation)}
            style={{ marginRight: 10 }}
          >
            <Icon name="exit-to-app" size={30} color="#fff" />
          </Touchable>
        ),
      })}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

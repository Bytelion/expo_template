import React from 'react';
import { Alert } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import { colors, device } from '@components/common/theme';
import { Icon, Touchable } from '@components/common/Layout';
import { removeAuth } from '@store/actions/auth';

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
      headerStyle: {
        backgroundColor: colors.primary.main,
        borderBottomWidth: 0,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: Constants.manifest.name,
        headerLeft: () => {},
        headerRight: () => (
          <Touchable
            onPress={() => logout(navigation)}
            style={{ marginRight: 10 }}
          >
            <Icon
              name="logout"
              size={device.width * 0.075}
              color={colors.white}
              community
            />
          </Touchable>
        ),
      })}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

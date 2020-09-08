import { Easing } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';
import { isEmpty } from 'lodash';
import store from '@store';
import HomeNavigator from '../HomeNavigator';
import AuthNavigator from '../AuthNavigator';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  }
);

export default createAppContainer(
  createStackNavigator(
    {
      Auth: { screen: AuthNavigator },
      Main: { screen: MainNavigator },
    },
    {
      initialRouteName: 'Auth',
      headerMode: 'none',
      defaultNavigationOptions: {
        cardOverlayEnabled: true,
        gestureEnabled: false,
      },
      ...TransitionPresets.ModalPresentationIOS,
    }
  )
);

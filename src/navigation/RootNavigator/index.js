import { Animated, Easing } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { isEmpty } from 'lodash';
import store from '../../store';
import HomeNavigator from '../HomeNavigator';
import AuthNavigator from '../AuthNavigator';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    headerMode: 'none',
    transparentCard: true,
    defaultNavigationOptions: {
      gesturesEnabled: false,
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
        gesturesEnabled: false,
      },
      transitionConfig: () => {
        if (isEmpty(store.getState().auth.authToken)) {
          return null;
        }
        return {
          transitionSpec: {
            timing: Animated.timing,
            easing: Easing.step0,
          },
        };
      },
    }
  )
);

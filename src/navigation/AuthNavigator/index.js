import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '@components/screens/Login';

export default createStackNavigator(
  {
    Auth: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      gestureEnabled: false,
      headerBackTitle: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
    },
  }
);

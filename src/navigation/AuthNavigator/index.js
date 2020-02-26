import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../components/screens/Login';

export default createStackNavigator(
  {
    Auth: {
      screen: LoginScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: 'Auth',
    defaultNavigationOptions: {
      gesturesEnabled: false,
      headerBackTitle: null,
      headerStyle: {
        borderBottomWidth: 0,
      },
    },
  }
);

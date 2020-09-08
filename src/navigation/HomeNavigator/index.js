import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../components/screens/Home';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
});

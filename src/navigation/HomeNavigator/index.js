import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../../components/screens/Home';

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

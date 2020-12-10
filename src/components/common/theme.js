import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');
const { statusBarHeight } = Constants;
const aspectRatio = width / height;

const device = {
  width,
  height,
  statusBarHeight,
  aspectRatio,
};

const debug = {
  borderWidth: 1,
  borderColor: 'red',
};

const variables = {
  fontSize: 16,
};

const colors = {
  // App
  primary: '#00796b',
  background: '#777777',
  primaryText: '#b3ffffff',
  secondaryText: '#fff',
  placeholderText: '#999',
  // General
  white: '#fff',
  warn: '#ff0000',
  transparent: 'transparent',
};

const boxShadow = {
  shadowColor: colors.darkGray,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 2,
};

export { device, debug, variables, colors, boxShadow };

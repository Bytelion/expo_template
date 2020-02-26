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
  primaryBlue: '#0166A4',
  primaryOrange: '#ff7426',
  primaryGreen: '#00796B',
  secondaryBlue: '#0077bd',
  skyBlue: '#e1f5fe',
  waterBlue: '#b0cff4',
  darkBlue: '#02579b',
  landBrown: '#eedfc9',
  // General
  aztec: '#2a383a',
  zambezi: '#585858',
  success: '#4bb543',
  warn: '#d85a42',
  yellow: '#ffff40',
  white: '#fff',
  red: '#f80102',
  smokeyWhite: 'rgba(255,255,255,0.7)',
  black: '#000',
  charcoal: '#282828',
  darkGray: '#929292',
  gray: '#ccc',
  mediumGray: '#dfdfdf',
  lightGray: '#f5f5f5',
  fbBlue: '#3b5998',
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

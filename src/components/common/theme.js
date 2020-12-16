import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');
const { statusBarHeight } = Constants;
const aspectRatio = width / height;

const device = {
  width,
  height,
  aspectRatio,
  statusBarHeight,
};

const debug = {
  borderWidth: 1,
  borderColor: 'red',
};

const boxShadow = {
  shadowColor: '#888',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.8,
  shadowRadius: 2,
};

const colors = {
  primary: {
    main: '#329A9A',
    alt: '#74D7D7',
  },
  secondary: {
    main: '',
    alt: '',
  },
  grays: {
    dark: '#888',
    medium: '#aaa',
    bright: '#eee',
  },
  shades: {
    white: 'rgba(255, 255, 255, .65)',
    black: 'rgba(0, 0, 0, .65)',
  },
  text: {
    main: '#363636',
    alt: '#B3B3B3',
    placeholder: '#999',
  },
  // General
  black: '#000',
  white: '#fff',
  warn: '#B94B42',
  transparent: 'transparent',
};

const typography = {
  fontFamily: 'Roboto',
  h1: {
    fontSize: 34,
    fontWeight: '700',
  },
  h2: {
    fontSize: 30,
    fontWeight: '700',
  },
  h3: {
    fontSize: 26,
    fontWeight: '400',
  },
  h4: {
    fontSize: 22,
    fontWeight: '400',
  },
  h5: {
    fontSize: 18,
    fontWeight: '400',
  },
  h6: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  subtitle1: {},
  subtitle2: {},
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    lineHeight: 20,
  },
};

export { device, debug, colors, boxShadow, typography };

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
    light: 'rgba(255, 255, 255, .7)',
    dark: 'rgba(0, 0, 0, .7)',
  },
  text: {
    main: '#b3ffffff',
    alt: '#fff',
    placeholder: '#999',
  },
  // General
  black: '#000',
  white: '#fff',
  warn: '#ff0000',
  transparent: 'transparent',
};

const typography = {
  fontFamily: 'Roboto',
  h1: {
    fontSize: 40,
    fontWeight: '700',
  },
  h2: {
    fontSize: 34,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 22,
  },
  h5: {
    fontSize: 18,
  },
  h6: {
    fontSize: 16,
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
  caption: {},
};

export { device, debug, colors, boxShadow, typography };

import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');
const { statusBarHeight } = Constants;
const aspectRatio = width / height;

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
  text: {
    main: '#363636',
    alt: '#B3B3B3',
    placeholder: '#999',
  },
  // General
  black: '#000',
  blackFade: 'rgba(0, 0, 0, .65)',
  white: '#fff',
  whiteFade: 'rgba(255, 255, 255, .65)',
  warn: '#B94B42',
  transparent: 'transparent',
};

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

const spacing = 8;

const typography = {
  h1: {
    fontSize: 34,
  },
  h2: {
    fontSize: 30,
  },
  h3: {
    fontSize: 26,
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
  caption: {
    fontSize: 12,
    lineHeight: 20,
  },
};

export { boxShadow, colors, device, debug, spacing, typography };

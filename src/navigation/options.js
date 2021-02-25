import { colors } from '@theme';

const base = {
  headerStyle: {
    backgroundColor: colors.primary.main,
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTintColor: colors.white,
};

const knockout = {
  headerShown: false,
  gestureEnabled: false,
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: colors.primary.main,
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTintColor: colors.white,
};

export { base, knockout };

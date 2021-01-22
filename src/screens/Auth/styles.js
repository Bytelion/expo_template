import { StyleSheet } from 'react-native';
import { colors } from '@components/common/theme';

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary.main,
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
  },
  scrollViewInner: {
    justifyContent: 'center',
    marginHorizontal: 60,
    paddingTop: 120,
  },
});

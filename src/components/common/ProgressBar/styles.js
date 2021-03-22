import { StyleSheet } from 'react-native';
import { colors } from '@components/common/theme';

export default StyleSheet.create({
  progressBar: {
    width: '100%',
    position: 'relative',
    backgroundColor: colors.grays.medium,
    overflow: 'hidden',
  },
  progressBarPercent: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.grays.dark,
  },
});

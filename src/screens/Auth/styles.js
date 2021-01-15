import { StyleSheet } from 'react-native';
import { colors, device, typography } from '@components/common/theme';

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary.main,
    flex: 1,
  },
  statusBar: {
    height: device.statusBarHeight,
    backgroundColor: colors.primary.main,
  },
  scrollView: {
    justifyContent: 'center',
  },
  scrollViewInner: {
    height: device.height,
    justifyContent: 'center',
    marginHorizontal: 60,
  },
  title: {
    ...typography.h1,
    color: colors.white,
    marginBottom: 60,
    textAlign: 'center',
  },
  subTitle: {
    ...typography.h4,
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  actionView: {
    marginBottom: 30,
  },
  action: {
    color: colors.white,
  },
  label: {
    color: colors.shades.white,
  },
});

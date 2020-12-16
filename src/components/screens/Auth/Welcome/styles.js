import { StyleSheet } from 'react-native';
import { colors, device, typography } from '@components/common/theme';

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary.main,
    flex: 1,
  },
  scrollView: {
    justifyContent: 'center',
  },
  scrollViewInner: {
    height: device.height - device.statusBarHeight * 2,
    justifyContent: 'center',
    marginHorizontal: 64,
  },
  subTitle: {
    ...typography.h5,
    color: colors.white,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.white,
    textAlign: 'center',
  },
  infoText: {
    ...typography.body2,
    color: colors.white,
    marginBottom: 20,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  actionView: {
    marginBottom: 20,
  },
  label: {
    color: colors.shades.white,
  },
  action: {
    color: colors.white,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
});

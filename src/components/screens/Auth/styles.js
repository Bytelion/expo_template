import { StyleSheet } from 'react-native';
import { colors, device } from '@components/common/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  createOne: {
    color: colors.secondaryText,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  forgot: {
    color: colors.primaryText,
    marginBottom: 30,
    marginRight: 10,
    marginTop: 8,
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
  inputContainer: {
    height: 95,
    justifyContent: 'space-between',
  },
  noAccount: {
    color: colors.primaryText,
    fontSize: 14,
    letterSpacing: 0.44,
    lineHeight: 28,
  },
  scrollContainer: {
    height: device.height,
    justifyContent: 'center',
    marginHorizontal: 64,
  },
  scrollView: {
    justifyContent: 'center',
  },
  signUp: {
    alignItems: 'center',
    marginTop: 24,
  },
  statusBar: {
    backgroundColor: colors.primaryBlue,
    height: device.statusBarHeight,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 0.21,
    marginBottom: 15,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 36.4,
    letterSpacing: 0.25,
    marginBottom: 60,
    textAlign: 'center',
  },
});

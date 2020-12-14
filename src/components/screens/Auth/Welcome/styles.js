import { StyleSheet } from 'react-native';
import { colors, device } from '@components/common/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary.main,
    flex: 1,
  },
  infoText: {
    color: colors.text.main,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 21,
    marginBottom: 25,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  inputContainer: {
    height: 95,
    justifyContent: 'space-between',
  },
  noEmail: {
    color: colors.text.main,
    fontSize: 14,
    letterSpacing: 0.44,
    lineHeight: 28,
  },
  resend: {
    color: colors.text.alt,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  scrollContainer: {
    height: device.height - device.statusBarHeight * 2,
    justifyContent: 'center',
    marginHorizontal: 64,
  },
  scrollView: {
    justifyContent: 'center',
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 0.21,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 36.4,
    letterSpacing: 0.25,
    marginBottom: 10,
    textAlign: 'center',
  },
});

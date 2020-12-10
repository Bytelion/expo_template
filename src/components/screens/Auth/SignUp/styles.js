import { StyleSheet } from 'react-native';
import { colors, device } from '@components/common/theme';

export default StyleSheet.create({
  checkStyle: {
    marginBottom: 25,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  infoText: {
    color: colors.primaryText,
    fontSize: 12,
    letterSpacing: 0.17,
    lineHeight: 21,
    marginBottom: 25,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  input: {
    marginBottom: 10,
  },
  scrollContainer: {
    height: device.height,
    marginHorizontal: 64,
  },
  scrollView: {
    justifyContent: 'center',
  },
  signUp: {
    alignItems: 'center',
    marginTop: 24,
  },
  subTitle: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 0.21,
    marginBottom: 15,
    textAlign: 'center',
  },
});

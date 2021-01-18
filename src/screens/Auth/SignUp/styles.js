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
    height: device.height,
    marginHorizontal: 64,
    paddingTop: 30,
  },
  input: {
    marginBottom: 10,
  },
  infoText: {
    ...typography.caption,
    color: colors.white,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  checkStyle: {
    marginBottom: 30,
  },
});

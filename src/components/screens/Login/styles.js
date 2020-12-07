import { StyleSheet } from 'react-native';
import { colors, device } from '@components/common/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.smokeyWhite,
    flex: 1,
  },
  defaultBorder: {
    borderColor: colors.mediumGray,
    borderWidth: 1,
  },
  errorBorder: {
    borderColor: colors.warn,
    borderWidth: 2,
  },
  errorText: {
    color: colors.warn,
  },
  image: {
    height: '90%',
    width: '50%',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 22.5,
    color: colors.black,
    fontSize: 16,
    height: 45,
    marginVertical: 5,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingTop: 4.5,
    width: '100%',
  },
  scrollContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  scrollView: {
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: colors.primaryBlue,
    height: device.statusBarHeight,
  },
  topBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
    height: 100,
    justifyContent: 'center',
  },
});

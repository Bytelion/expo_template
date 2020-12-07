import { StyleSheet } from 'react-native';
import { colors, device } from '@components/common/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.smokeyWhite,
    flex: 1,
  },
  image: {
    height: '90%',
    marginLeft: device.width * 0.25,
    width: '50%',
  },
  logout: {
    marginLeft: 'auto',
    marginRight: 10,
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

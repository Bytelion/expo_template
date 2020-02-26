import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, device, debug as debugView } from '../theme';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  fill: {
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  padding: {
    paddingHorizontal: 10,
    paddingVertical: '2.5%',
  },
  row: {
    flexDirection: 'row',
  },
  statusBar: {
    paddingTop: device.statusBarHeight,
  },
  stretch: {
    alignSelf: 'stretch',
  },
});

export default ({
  flex,
  fill,
  color,
  stretch,
  padding,
  center,
  alignItems,
  justifyContent,
  row,
  column,
  statusBar,
  debug,
  style,
  ...props
}) => (
  <View
    style={[
      flex && styles.flex,
      fill && styles.fill,
      color && { backgroundColor: color },
      stretch && styles.stretch,
      padding && styles.padding,
      center && styles.center,
      alignItems && { alignItems },
      justifyContent && { justifyContent },
      row && styles.row,
      column && styles.column,
      statusBar && styles.statusBar,
      debug && debugView,
      style,
    ]}
    {...props}
  />
);

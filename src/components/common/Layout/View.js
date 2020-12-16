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
  end: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
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
  alignItems,
  center,
  color,
  column,
  debug,
  end,
  flex,
  fill,
  stretch,
  padding,
  justifyContent,
  row,
  statusBar,
  style,
  ...props
}) => (
  <View
    style={[
      alignItems && { alignItems },
      center && styles.center,
      color && { backgroundColor: color },
      column && styles.column,
      debug && debugView,
      end && styles.end,
      flex && styles.flex,
      fill && styles.fill,
      justifyContent && { justifyContent },
      padding && styles.padding,
      row && styles.row,
      statusBar && styles.statusBar,
      stretch && styles.stretch,
      style,
    ]}
    {...props}
  />
);

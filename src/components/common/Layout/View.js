import React from 'react';
import { StyleSheet, View } from 'react-native';
import { device, debug as debugStyles, spacing } from '../theme';

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
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  statusBar: {
    height: device.statusBarHeight,
  },
  stretch: {
    alignSelf: 'stretch',
  },
});

export default ({
  alignItems,
  background,
  center,
  column,
  debug,
  end,
  flex,
  justifyContent,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  row,
  statusBar,
  stretch,
  style,
  ...props
}) => (
  <View
    style={[
      alignItems && { alignItems },
      background && { backgroundColor: background },
      center && styles.center,
      column && styles.column,
      debug && debugStyles,
      end && styles.end,
      flex && styles.flex,
      justifyContent && { justifyContent },
      m && { margin: spacing * m },
      mt && { marginTop: spacing * mt },
      mr && { marginRight: spacing * mr },
      mb && { marginBottom: spacing * mb },
      ml && { marginLeft: spacing * ml },
      mx && {
        marginRight: spacing * mx,
        marginLeft: spacing * mx,
      },
      my && {
        marginTop: spacing * my,
        marginBottom: spacing * my,
      },
      p && { padding: spacing * p },
      pt && { paddingTop: spacing * pt },
      pr && { paddingRight: spacing * pr },
      pb && { paddingBottom: spacing * pb },
      pl && { paddingLeft: spacing * pl },
      px && {
        paddingRight: spacing * px,
        paddingLeft: spacing * px,
      },
      py && {
        paddingTop: spacing * py,
        paddingBottom: spacing * py,
      },
      row && styles.row,
      statusBar && styles.statusBar,
      stretch && styles.stretch,
      style,
    ]}
    {...props}
  />
);

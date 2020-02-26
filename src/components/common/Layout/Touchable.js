import React from 'react';
import { StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ({
  center,
  alignItems,
  justifyContent,
  backgroundColor,
  style,
  ...props
}) => (
  <Touchable
    hitSlop={{
      top: 15,
      left: 15,
      right: 15,
      bottom: 15,
    }}
    style={[
      center && styles.center,
      alignItems && { alignItems },
      justifyContent && { justifyContent },
      backgroundColor && { backgroundColor },
      style,
    ]}
    {...props}
  />
);

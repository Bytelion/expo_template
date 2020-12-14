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
  alignItems,
  backgroundColor,
  center,
  justifyContent,
  style,
  ...props
}) => (
  <Touchable
    hitSlop={{
      top: 15,
      right: 15,
      bottom: 15,
      left: 15,
    }}
    style={[
      alignItems && { alignItems },
      backgroundColor && { backgroundColor },
      center && styles.center,
      justifyContent && { justifyContent },
      style,
    ]}
    {...props}
  />
);

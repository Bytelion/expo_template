import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
  children,
  justifyContent,
  style,
  ...props
}) => (
  <RectButton
    style={[
      alignItems && { alignItems },
      backgroundColor && { backgroundColor },
      center && styles.center,
      justifyContent && { justifyContent },
      style,
    ]}
    {...props}
  >
    <View accessible>{children}</View>
  </RectButton>
);

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
  text: {
    letterSpacing: 0.35,
  },
  white: {
    color: colors.white,
  },
});

export default ({ color, bold, fontSize, style, ...props }) => (
  <Text
    style={[
      color && color === 'white' ? styles.white : { color },
      bold && { fontWeight: 'bold' },
      fontSize && { fontSize },
      styles.text,
      style,
    ]}
    {...props}
  />
);

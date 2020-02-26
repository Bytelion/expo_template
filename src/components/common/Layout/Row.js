import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../theme';
import View from './View';

const styles = StyleSheet.create({
  dividerBottom: {
    borderBottomWidth: 1,
  },
  dividerTop: {
    borderColor: colors.white,
    borderTopWidth: 1,
  },
});

export default ({ divider, dividerLastOfType, style, ...props }) => (
  <View
    style={[
      divider && styles.dividerTop,
      dividerLastOfType && [styles.dividerTop, styles.dividerBottom],
      style,
    ]}
    {...props}
    row
  />
);

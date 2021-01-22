import React from 'react';
import { Text } from 'react-native';
import { colors, typography } from '../theme';

export default ({ center, color, size, style, variant, weight, ...props }) => (
  <Text
    style={[
      center && { textAlign: 'center' },
      color && { color: colors[color] },
      size && { fontSize: size },
      style,
      variant && typography[variant],
      weight && { fontWeight: weight },
    ]}
    {...props}
  />
);

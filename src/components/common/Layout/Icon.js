import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme';

export default ({ color, style, community, ...props }) => {
  if (community) {
    return (
      <MaterialCommunityIcons
        color={color}
        style={[color || { color: colors.gray }, style]}
        {...props}
      />
    );
  }
  return (
    <MaterialIcons
      color={color}
      style={[color || { color: colors.gray }, style]}
      {...props}
    />
  );
};

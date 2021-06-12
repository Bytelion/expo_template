import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme';

export default ({ color, community, style, ...props }) => {
  if (community) {
    return (
      <MaterialCommunityIcons
        color={color}
        style={[color || { color: colors.grays.medium }, style]}
        {...props}
      />
    );
  }
  return (
    <MaterialIcons
      color={color}
      style={[color || { color: colors.grays.medium }, style]}
      {...props}
    />
  );
};

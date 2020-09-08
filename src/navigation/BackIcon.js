import React from 'react';
import { Icon } from '@components/common/Layout';
import { colors } from '@components/common/theme';

export default ({ lightContent, ...props }) => (
  <Icon
    name="arrow-back"
    size={30}
    color={lightContent ? colors.white : colors.black}
    style={{ paddingHorizontal: 15 }}
    {...props}
  />
);

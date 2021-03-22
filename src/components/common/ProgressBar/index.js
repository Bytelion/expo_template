import React from 'react';
import { View } from '@components/common/Layout';
import styles from './styles';

const ProgressBar = ({ height = 24, percent, percentStyle, style }) => {
  return (
    <View
      style={[
        styles.progressBar,
        {
          height,
          borderRadius: height / 2,
        },
        style,
      ]}
      row
    >
      <View
        style={[
          styles.progressBarPercent,
          {
            width: `${percent}%`,
            borderRadius: height / 2,
          },
          percentStyle,
        ]}
      />
    </View>
  );
};

export default ProgressBar;

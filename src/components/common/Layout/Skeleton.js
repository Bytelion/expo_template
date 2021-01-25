import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { colors } from '../theme';

export default ({
  animate = true,
  borderRadius = 0,
  circle,
  color,
  height,
  width = 'auto',
}) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const runFade = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        runFade();
      });
    });
  };

  useEffect(() => {
    if (animate) {
      runFade();
    }
  }, []);

  return (
    <Animated.View
      style={{
        height,
        width: circle ? height : width,
        backgroundColor: color ? colors[color] : colors.grays.bright,
        borderRadius: circle ? height / 2 : borderRadius,
        opacity: animate ? fadeAnimation : 1,
      }}
    />
  );
};

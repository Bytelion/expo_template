import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: '#bdbdbd',
    overflow: 'hidden',
  },
  toggleBopper: {
    backgroundColor: colors.white,
  },
});

export default ({ checked, onPress, size = 20 }) => {
  const toggleTransition = useRef(new Animated.Value(checked ? 1 : 0)).current;

  const toggleAnimation = () => {
    Animated.timing(toggleTransition, {
      toValue: checked ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    toggleAnimation();
  }, [checked]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          styles.toggle,
          {
            height: size,
            width: size * 1.5,
            backgroundColor: toggleTransition.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(189, 189, 189, 1)', 'rgba(0, 179, 0, 1)'],
            }),
            borderRadius: size / 2,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.toggleBopper,
            {
              height: size - 2,
              width: size - 2,
              borderRadius: size / 2,
              margin: 1,
              transform: [
                {
                  scale: 0.95,
                },
                {
                  translateX: toggleTransition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, size / 2],
                  }),
                },
              ],
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

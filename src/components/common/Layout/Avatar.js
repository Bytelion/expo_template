import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from '../Image';
import View from './View';
import { colors } from '../theme';

const styles = StyleSheet.create({
  avatarImage: {
    backgroundColor: colors.grays.bright,
    overflow: 'hidden',
  },
  avatar: {
    backgroundColor: colors.grays.dark,
    borderWidth: 2,
    borderColor: colors.grays.dark,
    overflow: 'hidden',
  },
  avatarHead: {
    position: 'absolute',
    top: 0,
    left: '50%',
    backgroundColor: colors.grays.bright,
    borderWidth: 2,
    borderColor: colors.grays.dark,
    overflow: 'hidden',
  },
  avatarBody: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: colors.grays.bright,
    borderWidth: 2,
    borderColor: colors.grays.dark,
    overflow: 'hidden',
  },
});

export default ({ image, size = 32 }) => (
  <>
    {image ? (
      <Image
        source={{
          uri: image,
        }}
        style={[
          styles.avatarImage,
          {
            height: size,
            width: size,
            borderRadius: size,
          },
        ]}
      />
    ) : (
      <View
        style={[
          styles.avatar,
          {
            height: size,
            width: size,
            borderRadius: size,
          },
        ]}
      >
        <View
          style={[
            styles.avatarHead,
            {
              height: size / 2,
              width: size / 2,
              borderRadius: size / 2,
              marginLeft: (size / 4) * -1,
            },
          ]}
        />
        <View
          style={[
            styles.avatarBody,
            {
              height: size,
              width: size,
              borderRadius: size,
              marginLeft: (size / 2) * -1,
            },
          ]}
        />
      </View>
    )}
  </>
);

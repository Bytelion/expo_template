import React from 'react';
import { Image as RNImage, ImageBackground } from 'react-native';
import { getImage } from './images';
import { device } from '../theme';

const Image = ({
  name,
  source,
  resizeMode,
  center,
  size,
  maxWidth,
  style,
  ...props
}) => {
  const returnHeight = () => {
    if (name) {
      const { width, height } = RNImage.resolveAssetSource(
        name ? getImage(name) : source
      );
      return (height * device.width) / width;
    }
    return null;
  };
  return (
    <RNImage
      resizeMode={resizeMode || 'contain'}
      source={name ? getImage(name) : source}
      style={[
        size && {
          width: size,
          height: size,
        },
        !size && { height: returnHeight() },
        maxWidth && { width: '100%' },
        center && {
          alignSelf: 'center',
        },
        style,
      ]}
      {...props}
    />
  );
};

const BackgroundImage = ({ name, source, style, resizeMode, ...props }) => (
  <ImageBackground
    resizeMode={resizeMode || 'cover'}
    source={name ? getImage(name) : source}
    style={[
      {
        flex: 1,
        width: undefined,
        height: undefined,
        alignSelf: 'stretch',
      },
      style,
    ]}
    {...props}
  />
);

export { Image, BackgroundImage };

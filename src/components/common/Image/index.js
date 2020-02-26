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
      source={name ? getImage(name) : source}
      resizeMode={resizeMode || 'contain'}
      style={[
        center && {
          alignSelf: 'center',
        },
        size && {
          width: size,
          height: size,
        },
        !size && { height: returnHeight() },
        maxWidth && { width: '100%' },
        style,
      ]}
      {...props}
    />
  );
};

const BackgroundImage = ({ name, source, style, resizeMode, ...props }) => (
  <ImageBackground
    style={[
      {
        flex: 1,
        width: undefined,
        height: undefined,
        alignSelf: 'stretch',
      },
      style,
    ]}
    source={name ? getImage(name) : source}
    resizeMode={resizeMode || 'cover'}
    {...props}
  />
);

export { Image, BackgroundImage };

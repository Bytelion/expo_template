import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import ActivityIndicator from '../ActivityIndicator';
import { colors } from '../theme';
import { Image } from '../Image';
import Text from './Text';
import Row from './Row';
import Icon from './Icon';
import Touchable from './Touchable';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    borderRadius: 24,
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  },
});

export default ({
  color,
  disabled,
  flex,
  icon,
  iconColor,
  iconSize,
  iconStyle,
  image,
  imageStyle,
  justifyContent,
  style,
  pending,
  title = '',
  textStyle,
  textColor,
  uppercase = true,
  ...props
}) => (
  <Touchable
    alignItems={!icon && !image && 'center'}
    backgroundColor={color || colors.grays.dim}
    disabled={disabled || pending}
    style={[
      styles.button,
      disabled && { opacity: 0.5 },
      flex && { flex },
      style,
    ]}
    {...props}
  >
    <Row
      style={justifyContent ? { justifyContent } : { justifyContent: 'center' }}
    >
      {pending ? (
        <ActivityIndicator color={colors.white} size="small" />
      ) : (
        <Fragment>
          {icon && (
            <Icon
              color={iconColor}
              name={icon}
              size={iconSize || 28}
              style={iconStyle}
            />
          )}
          {image && <Image name={image} size={25} style={imageStyle} />}
          <Text
            color={!textColor ? colors.white : textColor}
            style={[styles.text, textStyle]}
          >
            {uppercase ? title.toUpperCase() : title}
          </Text>
        </Fragment>
      )}
    </Row>
  </Touchable>
);

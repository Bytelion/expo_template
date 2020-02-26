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
    borderColor: colors.gray,
    borderRadius: 50,
    borderWidth: 0.5,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  text: {
    lineHeight: 28,
    textAlign: 'center',
  },
});

export default ({
  flex,
  justifyContent,
  icon,
  iconSize,
  iconStyle,
  iconColor,
  image,
  imageStyle,
  color,
  title,
  textStyle,
  textColor,
  disabled,
  pending,
  style,
  ...props
}) => (
  <Touchable
    style={[
      styles.button,
      flex && { flex },
      disabled && { opacity: 0.5 },
      style,
    ]}
    backgroundColor={color || colors.gray}
    alignItems={!icon && !image && 'center'}
    disabled={disabled || pending}
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
              name={icon}
              size={iconSize || 28}
              style={iconStyle}
              color={iconColor}
            />
          )}
          {image && <Image name={image} size={25} style={imageStyle} />}
          <Text
            style={[styles.text, textStyle]}
            color={!textColor ? colors.white : textColor}
          >
            {title}
          </Text>
        </Fragment>
      )}
    </Row>
  </Touchable>
);

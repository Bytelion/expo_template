import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors } from '../theme';
import Icon from './Icon';
import Row from './Row';
import Text from './Text';
import View from './View';

const styles = StyleSheet.create({
  checkBox: {
    backgroundColor: colors.transparent,
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
  },
  disabledBackground: {
    height: 18,
    width: 18,
    position: 'absolute',
    top: '50%',
    left: '50%',
    backgroundColor: colors.grays.medium,
    flex: 1,
    marginLeft: -9,
    marginTop: -9,
    overflow: 'hidden',
  },
  disabledCheckBox: {
    marginRight: 10,
    marginVertical: 5,
  },
  disabledContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: colors.text.alt,
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  title: {
    color: colors.text.primary,
    fontSize: 14,
  },
});

export default ({ disabled, style, title, ...props }) => {
  if (disabled) {
    return (
      <Row style={styles.disabledContainer}>
        <View style={styles.disabledCheckBox}>
          <View style={styles.disabledBackground} />
          <Icon
            color={colors.disabledBorder}
            name="check-box-outline-blank"
            size={24}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
      </Row>
    );
  }
  return (
    <CheckBox
      checkedIcon="check-box"
      checkedColor={colors.white}
      containerStyle={[styles.checkBox, style]}
      iconType="material"
      textStyle={styles.textStyle}
      title={title}
      uncheckedIcon="check-box-outline-blank"
      {...props}
    />
  );
};

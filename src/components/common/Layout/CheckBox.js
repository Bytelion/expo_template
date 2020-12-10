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
    backgroundColor: colors.grayBackground,
    flex: 1,
    height: 18,
    left: '50%',
    marginLeft: -9,
    marginTop: -9,
    overflow: 'hidden',
    position: 'absolute',
    top: '50%',
    width: 18,
  },
  disabledCheckBox: {
    marginRight: 10,
    marginVertical: 5,
  },
  disabledContainer: {
    alignItems: 'center',
  },
  textStyle: {
    color: colors.primaryText,
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0.2,
    lineHeight: 21,
  },
  title: {
    color: colors.primaryText,
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
            name="check-box-outline-blank"
            color={colors.disabledBorder}
            size={24}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
      </Row>
    );
  }
  return (
    <CheckBox
      title={title}
      containerStyle={[styles.checkBox, style]}
      iconType="material"
      checkedIcon="check-box"
      uncheckedIcon="check-box-outline-blank"
      checkedColor={colors.white}
      textStyle={styles.textStyle}
      {...props}
    />
  );
};

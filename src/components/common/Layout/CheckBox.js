import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { colors, typography } from '../theme';
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
    ...typography.caption,
    color: colors.text.alt,
    fontWeight: '400',
  },
  title: {
    ...typography.caption,
  },
});

export default ({ color, disabled, style, title, ...props }) => {
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
        <Text style={[styles.title]}>{title}</Text>
      </Row>
    );
  }

  return (
    <CheckBox
      checkedIcon="check-box"
      checkedColor={colors.white}
      containerStyle={[styles.checkBox, style]}
      iconType="material"
      textStyle={[
        styles.textStyle,
        {
          color,
        },
      ]}
      title={title}
      uncheckedIcon="check-box-outline-blank"
      {...props}
    />
  );
};

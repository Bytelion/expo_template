import React, { PureComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { colors } from '../theme';

const styles = StyleSheet.create({
  default: {
    borderWidth: 0,
  },
  error: {
    borderColor: colors.warn,
    borderWidth: 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 18,
    color: colors.black,
    fontSize: 12,
    height: 36,
    letterSpacing: 0,
    lineHeight: 16,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

// Input must be a class for custom inputs used in Formik forms
// See: https://github.com/bamlab/react-native-formik#use-any-input-component
class Input extends PureComponent {
  render() {
    const {
      error,
      height,
      keyboardType,
      placeholder = '',
      placeholderUpper = true,
      returnKeyType,
      secure,
      style,
      textStyle,
      value,
      ...props
    } = this.props;
    return (
      <TextInput
        keyboardType={keyboardType || 'default'}
        maxLength={50}
        placeholder={placeholderUpper ? placeholder.toUpperCase() : placeholder}
        placeholderTextColor={error ? colors.warn : colors.text.placeholder}
        returnKeyType={returnKeyType || 'done'}
        secureTextEntry={secure}
        style={[error ? styles.error : styles.default, styles.input, style]}
        textStyle={[styles.text, textStyle]}
        value={value}
        {...props}
      />
    );
  }
}

export default Input;

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
      value,
      keyboardType,
      secure,
      error,
      height,
      returnKeyType,
      style,
      placeholder = '',
      placeholderUpper = true,
      textStyle,
      ...props
    } = this.props;
    return (
      <TextInput
        value={value}
        keyboardType={keyboardType || 'default'}
        secureTextEntry={secure}
        placeholderTextColor={error ? colors.warn : colors.placeholderText}
        maxLength={50}
        returnKeyType={returnKeyType || 'done'}
        style={[error ? styles.error : styles.default, styles.input, style]}
        placeholder={placeholderUpper ? placeholder.toUpperCase() : placeholder}
        textStyle={[styles.text, textStyle]}
        {...props}
      />
    );
  }
}

export default Input;

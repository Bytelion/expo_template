import React, { PureComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { variables, colors } from '../theme';

const styles = StyleSheet.create({
  default: {
    borderColor: colors.mediumGray,
    borderWidth: 1,
  },
  error: {
    borderColor: colors.warn,
    borderWidth: 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 22.5,
    color: colors.black,
    fontSize: variables.fontSize,
    height: 45,
    marginVertical: 5,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingTop: 4.5,
    width: '100%',
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
      ...props
    } = this.props;
    return (
      <TextInput
        value={value}
        keyboardType={keyboardType || 'default'}
        secureTextEntry={secure}
        placeholderTextColor={error && 'rgba(216,90,66,0.5)'}
        maxLength={50}
        returnKeyType={returnKeyType || 'done'}
        style={[error ? styles.error : styles.default, styles.input, style]}
        {...props}
      />
    );
  }
}

export default Input;

import React, { PureComponent } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, typography } from '../theme';

const styles = StyleSheet.create({
  inputLabel: {
    ...typography.caption,
    fontWeight: '700',
  },
  inputFieldWrapper: {
    position: 'relative',
  },
  inputField: {
    ...typography.caption,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    borderWidth: 2,
    color: colors.black,
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputFieldDefault: {
    borderColor: 'transparent',
  },
  inputFieldError: {
    borderColor: colors.warn,
  },
  inputHint: {
    ...typography.caption,
  },
  inputError: {
    ...typography.caption,
    color: colors.warn,
  },
});

class Input extends PureComponent {
  render() {
    const {
      error,
      height,
      hint,
      keyboardType = 'default',
      label,
      placeholder = '',
      returnKeyType = 'done',
      secure,
      style,
      value,
      ...props
    } = this.props;

    return (
      <>
        {Boolean(label) && <Text style={styles.inputLabel}>{label}</Text>}
        <View style={styles.inputFieldWrapper}>
          <TextInput
            {...props}
            keyboardType={keyboardType}
            maxLength={50}
            placeholder={placeholder}
            placeholderTextColor={error ? colors.warn : colors.text.placeholder}
            returnKeyType={returnKeyType}
            secureTextEntry={secure}
            style={[
              error ? styles.inputFieldError : styles.inputFieldDefault,
              styles.inputField,
              style,
            ]}
            value={value}
          />
        </View>
        {Boolean(hint) && <Text style={styles.inputHint}>{hint}</Text>}
        {Boolean(error?.message) && (
          <Text style={styles.inputError}>{error.message}</Text>
        )}
      </>
    );
  }
}

export default Input;

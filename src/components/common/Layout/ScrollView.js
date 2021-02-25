import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { debug as debugView } from '../theme';

export default ({
  alignItems,
  center,
  contentContainerStyle,
  debug,
  extraScrollHeight,
  flex,
  justifyContent,
  stretch,
  showsVerticalScrollIndicator,
  style,
  ...props
}) => (
  <KeyboardAwareScrollView
    contentContainerStyle={[
      alignItems && { alignItems },
      center && {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      },
      justifyContent && { justifyContent },
      contentContainerStyle,
      debug && debugView,
    ]}
    extraScrollHeight={extraScrollHeight}
    enableResetScrollToCoords={false}
    enableOnAndroid
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    style={[flex && { flex: 1 }, stretch && { alignSelf: 'stretch' }, style]}
    {...props}
  />
);

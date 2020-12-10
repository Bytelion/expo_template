import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { debug as debugView } from '../theme';

export default ({
  flex,
  stretch,
  style,
  debug,
  contentContainerStyle,
  showsVerticalScrollIndicator,
  center,
  ...props
}) => (
  <KeyboardAwareScrollView
    style={[flex && { flex: 1 }, stretch && { alignSelf: 'stretch' }, style]}
    contentContainerStyle={[
      debug && debugView,
      center && {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      },
      contentContainerStyle,
    ]}
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    extraScrollHeight={150}
    enableResetScrollToCoords={false}
    enableOnAndroid
    {...props}
  />
);

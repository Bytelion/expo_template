import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { debug as debugView } from '../theme';

export default ({
  center,
  contentContainerStyle,
  debug,
  flex,
  stretch,
  showsVerticalScrollIndicator,
  style,
  ...props
}) => (
  <KeyboardAwareScrollView
    contentContainerStyle={[
      center && {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      },
      contentContainerStyle,
      debug && debugView,
    ]}
    extraScrollHeight={150}
    enableResetScrollToCoords={false}
    enableOnAndroid
    keyboardShouldPersistTaps="handled"
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    style={[flex && { flex: 1 }, stretch && { alignSelf: 'stretch' }, style]}
    {...props}
  />
);

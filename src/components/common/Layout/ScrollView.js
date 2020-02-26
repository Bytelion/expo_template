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
    keyboardShouldPersistTaps="always"
    showsVerticalScrollIndicator={showsVerticalScrollIndicator || false}
    extraScrollHeight={100}
    enableResetScrollToCoords={false}
    enableOnAndroid
    {...props}
  />
);

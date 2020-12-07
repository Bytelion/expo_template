import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { connect } from '@components/common/Helpers';
import store from '@store';
import RootNavigator from '@navigation/RootNavigator';

const App = ({ initialize }) => {
  const [appReady, setAppReady] = useState(false);

  StatusBar.setBarStyle('light-content', true);

  const initializeAppAsync = async () => {
    await store.dispatch(initialize);
  };

  if (!appReady) {
    return (
      <AppLoading
        startAsync={initializeAppAsync}
        onFinish={() => setAppReady(true)}
      />
    );
  }
  return <RootNavigator />;
};

export default connect(state => ({
  alert: state.common.alert,
}))(App);

import React, { useState, useEffect } from 'react';
import { StatusBar, AppState } from 'react-native';
import { connect } from '@components/common/Helpers';
import { Provider } from 'react-redux';
import store from '@store';
import RootNavigator from '@navigation/RootNavigator';

const App = () => {
  const [appState, setAppState] = useState(AppState.current);

  StatusBar.setBarStyle('light-content', true);

  const handleAppStateChange = (nextAppState) => {
    setAppState(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default connect()(App);

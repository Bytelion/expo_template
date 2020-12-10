import React, { useState, useRef, useEffect } from 'react';
import { StatusBar, Platform, AppState } from 'react-native';
import AppLoading from 'expo-app-loading';
import { connect, registerNotifications } from '@components/common/Helpers';
import * as Notifications from 'expo-notifications';
import store from '@store';
import RootNavigator from '@navigation/RootNavigator';

const App = ({ initialize, handleNotification }) => {
  const [appReady, setAppReady] = useState(false);
  const [appState, setAppState] = useState(AppState.current);
  const notificationListener = useRef();
  const responseListener = useRef();

  StatusBar.setBarStyle('light-content', true);

  const initializeAppAsync = async () => {
    await store.dispatch(initialize);
  };

  const onFinish = () => {
    setAppReady(true);
  };

  const handleAppStateChange = nextAppState => {
    setAppState(nextAppState);
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    registerNotifications();

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(
      notification => {
        handleNotification(notification);
      }
    );

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      response => {
        handleNotification(response.notification);
      }
    );

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  useEffect(() => {
    if (appState === 'active' || appState === undefined) {
      if (Platform.OS === 'ios') {
        // Clear badge count when the user opens the app
        Notifications.setBadgeCountAsync(0);
      }
    }
  }, [appState]);

  if (!appReady) {
    return (
      <AppLoading
        startAsync={initializeAppAsync}
        onFinish={onFinish}
        onError={() => {
          // Handle Error Logs Here
        }}
      />
    );
  }

  return <RootNavigator />;
};

export default connect()(App);

import React, { useState } from 'react';
import Constants from 'expo-constants';
import { isEmpty } from 'lodash';
import { connect } from '@components/common/Helpers';
import { colors } from '@components/common/theme';
import {
  Button,
  Input,
  ScrollView,
  View,
  Text,
  Touchable,
} from '@components/common/Layout';
import styles from './styles';

const LoginScreen = ({ hasAuth, navigation, username: lastUsername }) => {
  const [username, setUsername] = useState(lastUsername);
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigateHome = () => navigation.navigate('Home');
  const navigateSignUp = () => navigation.navigate('SignUp');

  // Navigate to home screen if the authToken already exists
  if (hasAuth) {
    navigateHome();
  }

  const handleLogin = async () => {
    if (isEmpty(username) || isEmpty(password)) {
      setUsernameError(isEmpty(username));
      setPasswordError(isEmpty(password));

      return;
    }

    // For test purposes allowing nav without authToken
    // REMOVE IN PROJECT
    navigateHome();
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.statusBar} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollViewInner}>
          <View style={styles.header}>
            <Text style={styles.title}>{Constants.manifest.name}</Text>
            <Text style={styles.subTitle}>Sign In</Text>
          </View>
          <View style={styles.inputs}>
            <Input
              error={usernameError}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username"
              style={styles.input}
              value={username}
            />
            <Input
              error={passwordError}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              value={password}
              style={styles.input}
              secure
            />
          </View>
          <View end style={styles.actionView}>
            <Touchable>
              <Text style={styles.action}>Forgot Password?</Text>
            </Touchable>
          </View>
          <View style={styles.actionView}>
            <Button
              color={colors.primary.alt}
              onPress={handleLogin}
              title="Sign In"
            />
          </View>
          <View center>
            <Text style={styles.label}>No Account?</Text>
            <Touchable onPress={navigateSignUp}>
              <Text style={styles.action}>Create one here!</Text>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default connect((state) => ({
  hasAuth: state.auth.hasAuth,
  alert: state.common.alert,
  username: state.auth.username,
}))(LoginScreen);

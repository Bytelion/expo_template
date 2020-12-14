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
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>{Constants.manifest.name}</Text>
          <Text style={styles.subTitle}>Sign In</Text>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Username"
              onChangeText={text => setUsername(text)}
              value={username}
              error={usernameError}
            />
            <Input
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
              error={passwordError}
              secure
            />
          </View>
          <View style={styles.forgotContainer}>
            <Touchable>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </Touchable>
          </View>
          <Button
            onPress={handleLogin}
            title="Sign In"
            color={colors.primary.alt}
          />
          <View style={styles.signUp}>
            <Text style={styles.noAccount}>No Account?</Text>
            <Touchable onPress={navigateSignUp}>
              <Text style={styles.createOne}>Create one here!</Text>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default connect(state => ({
  hasAuth: state.auth.hasAuth,
  alert: state.common.alert,
  username: state.auth.username,
}))(LoginScreen);

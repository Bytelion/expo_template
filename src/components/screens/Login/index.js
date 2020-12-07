import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { isEmpty } from 'lodash';
import { connect } from '@components/common/Helpers';
import { colors } from '@components/common/theme';
import { Image } from '@components/common/Image';
import {
  Button,
  Input,
  ScrollView,
  Text,
  View,
  Row,
} from '@components/common/Layout';
import styles from './styles';

const LoginScreen = ({ hasAuth, navigation, username: lastUsername }) => {
  const [username, setUsername] = useState(lastUsername);
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigateHome = () => navigation.navigate('Home');

  // Navigate to home screen if the authToken already exists
  if (hasAuth) {
    navigateHome();
  }

  const handleLogin = async () => {
    if (isEmpty(username) || isEmpty(password)) {
      if (isEmpty(username)) {
        setUsernameError(true);
      }
      if (isEmpty(password)) {
        setPasswordError(true);
      }
      return;
    }

    // For test purposes allowing nav without authToken
    // REMOVE IN PROJECT
    navigateHome();
    /*
    await authenticate({ username, password })
      .then(() => {
        navigateHome();
        setErrorText('');
        return true;
      })
      .catch(() =>
        setErrorText(
          'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.'
        )
      );
    */
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Row style={styles.topBar}>
        <Image name="appIcon" style={styles.image} />
      </Row>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.scrollContainer}>
            <Text style={styles.errorText}>{errorText}</Text>
            <Input
              placeholder="Username"
              style={[
                usernameError ? styles.errorBorder : styles.defaultBorder,
                styles.input,
              ]}
              onChangeText={text => setUsername(text)}
              value={username}
            />
            <Input
              placeholder="Password"
              style={[
                passwordError ? styles.errorBorder : styles.defaultBorder,
                styles.input,
              ]}
              onChangeText={text => setPassword(text)}
              value={password}
              secure
            />
            <Button
              onPress={handleLogin}
              title="Login"
              color={colors.primaryBlue}
              textStyle={styles.loginText}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export default connect(state => ({
  hasAuth: state.auth.hasAuth,
  alert: state.common.alert,
  username: state.auth.username,
}))(LoginScreen);

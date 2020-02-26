import React, { useState, Fragment } from 'react';
import { StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { isEmpty } from 'lodash';
import { connect } from '../../common/Helpers';
import { colors, device } from '../../common/theme';
import { Image } from '../../common/Image';
import {
  Button,
  Input,
  ScrollView,
  Text,
  View,
  Row,
} from '../../common/Layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.smokeyWhite,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  defaultBorder: {
    borderColor: colors.mediumGray,
    borderWidth: 1,
  },
  errorBorder: {
    borderColor: colors.warn,
    borderWidth: 2,
  },
  errorText: {
    color: colors.warn,
  },
  image: {
    height: '90%',
    width: '50%',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 22.5,
    color: colors.black,
    fontSize: 16,
    height: 45,
    marginVertical: 5,
    paddingBottom: 2,
    paddingHorizontal: 15,
    paddingTop: 4.5,
    width: '100%',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: colors.primaryBlue,
    height: device.statusBarHeight,
  },
  topBar: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.darkGray,
    height: 100,
    justifyContent: 'center',
  },
});

const LoginScreen = ({
  authenticate,
  hasAuth,
  navigation,
  username: lastUsername,
}) => {
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
    <Fragment>
      <View style={styles.statusBar} />
      <Row style={styles.topBar}>
        <Image name="appIcon" style={styles.image} />
      </Row>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
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
    </Fragment>
  );
};

export default connect(state => ({
  hasAuth: state.auth.hasAuth,
  alert: state.common.alert,
  username: state.auth.username,
}))(LoginScreen);

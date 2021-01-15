import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import { connect } from '@components/common/Helpers';
import { colors } from '@components/common/theme';
import {
  Button,
  CheckBox,
  Input,
  ScrollView,
  View,
  Text,
} from '@components/common/Layout';
import styles from './styles';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const navigateWelcome = () => navigation.navigate('Welcome');

  const emailDisclaimer =
    'Your email will only be used once to confirm your account. It will then be removed to keep you anonymous.';
  const passwordDisclaimer =
    '(8 or more characters, at least one number, and one capital letter.)';
  const checkTitle =
    'I agree I am over the age of 17 and agree to the terms and conditions.';

  const handleLogin = async () => {
    if (
      isEmpty(email) ||
      isEmpty(username) ||
      isEmpty(phone) ||
      isEmpty(password) ||
      isEmpty(passwordConfirm) ||
      !termsChecked
    ) {
      setEmailError(isEmpty(email));
      setUsernameError(isEmpty(username));
      setPhoneError(isEmpty(phone));
      setPasswordError(isEmpty(password));
      setPasswordConfirmError(isEmpty(passwordConfirm));

      return;
    }

    navigateWelcome();
  };

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollViewInner}>
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.input}
            error={emailError}
          />
          <Text style={styles.infoText}>{emailDisclaimer}</Text>
          <Input
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            style={styles.input}
            error={usernameError}
          />
          <Input
            placeholder="Mobile Phone"
            onChangeText={(text) => setPhone(text)}
            value={phone}
            style={styles.input}
            error={phoneError}
          />
          <Input
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            style={styles.input}
            error={passwordError}
            secure
          />
          <Input
            placeholder="Re-enter Password"
            onChangeText={(text) => setPasswordConfirm(text)}
            value={passwordConfirm}
            style={styles.input}
            error={passwordConfirmError}
            secure
          />
          <Text style={styles.infoText}>{passwordDisclaimer}</Text>
          <CheckBox
            color={colors.white}
            checked={termsChecked}
            onPress={() => setTermsChecked(!termsChecked)}
            style={styles.checkStyle}
            title={checkTitle}
          />
          <Button
            onPress={handleLogin}
            title="Sign Up"
            color={colors.primary.alt}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default connect()(SignUpScreen);

import React from 'react';
import { connect } from '@components/common/Helpers';
import { colors } from '@components/common/theme';
import {
  Button,
  ScrollView,
  View,
  Text,
  Touchable,
} from '@components/common/Layout';
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  const navigateSignIn = () => navigation.navigate('SignIn');

  const subTitle = "We're glad you're here.";
  const welcomeDisclaimer =
    'We sent you an email to confirm your account. After you’ve confirmed your account, come back and sign in!';
  const noEmailText = "Didn't recieve an email?";

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.infoText}>{welcomeDisclaimer}</Text>
          <Button
            onPress={navigateSignIn}
            title="Sign In"
            color={colors.primary.alt}
          />
          <View style={styles.resendContainer}>
            <Text style={styles.noEmail}>{noEmailText}</Text>
            <Touchable>
              <Text style={styles.resend}>Resend email</Text>
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
}))(WelcomeScreen);

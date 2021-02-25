import React from 'react';
import { connect } from '@Helpers';
import { Button, ScrollView, View, Text, Touchable } from '@Layout';
import { colors } from '@theme';
import styles from '../styles';

const WelcomeScreen = ({ navigation }) => {
  const navigateSignIn = () => navigation.navigate('SignIn');

  const handleResendEmail = () => {};

  const subTitle = "We're glad you're here.";
  const welcomeDisclaimer =
    'We sent you an email to confirm your account. After you’ve confirmed your account, come back and sign in!';
  const noEmailText = "Didn't recieve an email?";

  return (
    <View style={styles.screenView}>
      <ScrollView contentContainerStyle={styles.scrollView} center>
        <View
          style={styles.scrollViewInner}
          justifyContent="center"
          px={6}
          py={2}
        >
          <View center mb={2}>
            <Text color="white" variant="h1">
              Welcome!
            </Text>
            <Text color="white" variant="h5">
              {subTitle}
            </Text>
          </View>
          <View center mb={4}>
            <Text center color="white" variant="body2">
              {welcomeDisclaimer}
            </Text>
          </View>
          <View mb={4}>
            <Button
              onPress={navigateSignIn}
              title="Sign In"
              color={colors.primary.alt}
            />
          </View>
          <View center>
            <Text color="whiteFade">{noEmailText}</Text>
            <Touchable onPress={handleResendEmail}>
              <Text color="white">Resend email</Text>
            </Touchable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default connect((state) => ({
  alert: state.common.alert,
  hasAuth: state.auth.hasAuth,
  username: state.auth.username,
}))(WelcomeScreen);

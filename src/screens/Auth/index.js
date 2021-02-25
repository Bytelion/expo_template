import React from 'react';
import Constants from 'expo-constants';
import { useForm } from 'react-hook-form';
import Field from '@Forms/Field';
import { connect } from '@Helpers';
import { Button, ScrollView, View, Text, Touchable } from '@Layout';
import { colors } from '@theme';
import styles from './styles';

const LoginScreen = ({ hasAuth, navigation }) => {
  const form = useForm();

  const navigateHome = () => navigation.navigate('Home');
  const navigateForgotPassword = () => {};
  const navigateSignUp = () => navigation.navigate('SignUp');

  // Navigate to home screen if the authToken already exists
  if (hasAuth) {
    navigateHome();
  }

  const onSubmit = async () => {
    // REMOVE IN PROJECT
    // For test purposes allowing nav without authToken

    // await authenticate(data.values);

    navigateHome();
  };

  return (
    <View style={styles.screenView}>
      <View statusBar />
      <ScrollView contentContainerStyle={styles.scrollView} center>
        <View
          style={styles.scrollViewInner}
          justifyContent="center"
          px={6}
          py={2}
        >
          <View style={styles.header} mb={1}>
            <View center mb={4}>
              <Text color="white" variant="h1">
                {Constants.manifest.name}
              </Text>
            </View>
            <View center>
              <Text color="white" variant="h4">
                Sign In
              </Text>
            </View>
          </View>
          <View style={styles.inputs}>
            <View mb={1}>
              <Field
                form={form}
                name="username"
                placeholder="Username"
                rules={{
                  required: {
                    value: true,
                    message: 'Username is required.',
                  },
                }}
              />
            </View>
            <View mb={1}>
              <Field
                form={form}
                name="password"
                placeholder="Password"
                secure
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required.',
                  },
                }}
              />
            </View>
          </View>
          <View end mb={3}>
            <Touchable onPress={navigateForgotPassword}>
              <Text color="white">Forgot Password?</Text>
            </Touchable>
          </View>
          <View mb={3}>
            <Button
              color={colors.primary.alt}
              onPress={form.handleSubmit(onSubmit)}
              title="Sign In"
            />
          </View>
          <View center>
            <Text color="whiteFade">No Account?</Text>
            <Touchable onPress={navigateSignUp}>
              <Text color="white">Create one here!</Text>
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
}))(LoginScreen);

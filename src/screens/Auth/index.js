import React from 'react';
import Constants from 'expo-constants';
import { useForm } from 'react-hook-form';
import Field from '@common/Forms/Field';
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

const LoginScreen = ({ hasAuth, navigation }) => {
  const form = useForm();

  const navigateHome = () => navigation.navigate('Home');
  const navigateSignUp = () => navigation.navigate('SignUp');

  // Navigate to home screen if the authToken already exists
  if (hasAuth) {
    navigateHome();
  }

  const onSubmit = async (data) => {
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
          <View end style={styles.actionView}>
            <Touchable>
              <Text style={styles.action}>Forgot Password?</Text>
            </Touchable>
          </View>
          <View style={styles.actionView}>
            <Button
              color={colors.primary.alt}
              onPress={form.handleSubmit(onSubmit)}
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

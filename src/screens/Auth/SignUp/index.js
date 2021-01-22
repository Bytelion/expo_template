import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from '@common/Helpers';
import { colors } from '@common/theme';
import { Button, ScrollView, Text, View } from '@common/Layout';
import Field from '@common/Forms/Field';
import styles from '../styles';

const SignUpScreen = ({ navigation }) => {
  const form = useForm();

  const navigateWelcome = () => navigation.navigate('Welcome');

  const onSubmit = async () => {
    navigateWelcome();
  };

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollViewInner}>
          <View center mb={2}>
            <Text color="white" variant="body2">
              Sign up to get started.
            </Text>
          </View>
          <View mb={1}>
            <Field
              form={form}
              name="email"
              placeholder="Email"
              rules={{
                required: {
                  value: true,
                  message: 'Email is required.',
                },
              }}
            />
          </View>
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
          <View mb={4}>
            <Field
              form={form}
              name="password"
              placeholder="Password"
              secure
              rules={{
                required: {
                  value: true,
                  message: 'password is required.',
                },
              }}
            />
          </View>
          <Button
            onPress={form.handleSubmit(onSubmit)}
            title="Sign Up"
            color={colors.primary.alt}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default connect()(SignUpScreen);

import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from '@common/Helpers';
import { colors } from '@common/theme';
import { Button, ScrollView, View } from '@common/Layout';
import Field from '@common/Forms/Field';
import styles from './styles';

const SignUpScreen = ({ navigation }) => {
  const form = useForm();

  const navigateWelcome = () => navigation.navigate('Welcome');

  const onSubmit = async (data) => {
    navigateWelcome();
  };

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.scrollViewInner}>
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
                message: 'password is required.',
              },
            }}
          />
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

import React from 'react';
import Input from '@common/Forms/Input';
import { Controller } from 'react-hook-form';

const Field = ({ defaultValue = '', form, name, ref, rules, ...props }) => {
  const { control, errors } = form;

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          {...props}
          error={errors ? errors[name] : false}
          onBlur={onBlur}
          onChangeText={(text) => onChange(text)}
          value={value}
        />
      )}
      rules={rules}
    />
  );
};

export default Field;

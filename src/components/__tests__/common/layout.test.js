import React from 'react';
import { render, waitFor, cleanup } from 'react-native-testing-library';
import {
  Button,
  CheckBox,
  Icon,
  Input,
  Row,
  ScrollView,
  Text,
  Touchable,
  View,
} from '@common/Layout';

afterEach(cleanup);

test('Button', async () => {
  const button = await render(<Button />);
  await waitFor(() => button);
  expect(button).toBeTruthy();
  expect(button.toJSON()).toMatchSnapshot();
});

test('CheckBox', async () => {
  const checkBox = await render(<CheckBox />);
  await waitFor(() => checkBox);
  expect(checkBox).toBeTruthy();
  expect(checkBox.toJSON()).toMatchSnapshot();
});

test('Icon', async () => {
  const icon = await render(<Icon />);
  await waitFor(() => icon);
  expect(icon).toBeTruthy();
  expect(icon.toJSON()).toMatchSnapshot();
});

test('Input', async () => {
  const input = await render(<Input />);
  await waitFor(() => input);
  expect(input).toBeTruthy();
  expect(input.toJSON()).toMatchSnapshot();
});

test('Row', async () => {
  const row = await render(<Row />);
  await waitFor(() => row);
  expect(row).toBeTruthy();
  expect(row.toJSON()).toMatchSnapshot();
});

test('ScrollView', async () => {
  const scrollView = await render(<ScrollView />);
  await waitFor(() => scrollView);
  expect(scrollView).toBeTruthy();
  expect(scrollView.toJSON()).toMatchSnapshot();
});

test('Text', async () => {
  const text = await render(<Text />);
  await waitFor(() => text);
  expect(text).toBeTruthy();
  expect(text.toJSON()).toMatchSnapshot();
});

test('Touchable', async () => {
  const touchable = await render(
    <Touchable>
      <View />
    </Touchable>
  );
  await waitFor(() => touchable);
  expect(touchable).toBeTruthy();
  expect(touchable.toJSON()).toMatchSnapshot();
});

test('View', async () => {
  const view = await render(<View />);
  await waitFor(() => view);
  expect(view).toBeTruthy();
  expect(view.toJSON()).toMatchSnapshot();
});

import React from 'react';
import { render, waitFor, cleanup } from 'react-native-testing-library';
import {
  Avatar,
  CheckBox,
  Icon,
  Row,
  ScrollView,
  Skeleton,
  Text,
  View,
} from '@common/Layout';

afterEach(cleanup);

test('Avatar', async () => {
  const avatar = await render(<Avatar />);
  await waitFor(() => avatar);
  expect(avatar).toBeTruthy();
  expect(avatar.toJSON()).toMatchSnapshot();
});

// NOTE: Test is failing with maintained touchable package
// test('Button', async () => {
//   const button = await render(<Button />);
//   await waitFor(() => button);
//   expect(button).toBeTruthy();
//   expect(button.toJSON()).toMatchSnapshot();
// });

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

test('Skeleton', async () => {
  const skeleton = await render(<Skeleton />);
  await waitFor(() => skeleton);
  expect(skeleton).toBeTruthy();
  expect(skeleton.toJSON()).toMatchSnapshot();
});

test('Text', async () => {
  const text = await render(<Text />);
  await waitFor(() => text);
  expect(text).toBeTruthy();
  expect(text.toJSON()).toMatchSnapshot();
});

// NOTE: Test is failing with maintained touchable package
// test('Touchable', async () => {
//   const touchable = await render(
//     <Touchable>
//       <View />
//     </Touchable>
//   );
//   await waitFor(() => touchable);
//   expect(touchable).toBeTruthy();
//   expect(touchable.toJSON()).toMatchSnapshot();
// });

test('View', async () => {
  const view = await render(<View />);
  await waitFor(() => view);
  expect(view).toBeTruthy();
  expect(view.toJSON()).toMatchSnapshot();
});

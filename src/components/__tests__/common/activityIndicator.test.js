import React from 'react';
import { render, waitFor, cleanup } from 'react-native-testing-library';
import ActivityIndicator from '@common/ActivityIndicator';

afterEach(cleanup);

test('ActivityIndicator', async () => {
  const activityIndicator = await render(<ActivityIndicator />);
  await waitFor(() => activityIndicator);
  expect(activityIndicator).toBeTruthy();
  expect(activityIndicator.toJSON()).toMatchSnapshot();
});

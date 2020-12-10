import React from 'react';
import { render, waitFor, cleanup } from 'react-native-testing-library';
import { Image, BackgroundImage } from '../../common/Image';

afterEach(cleanup);

test('Image', async () => {
  const image = await render(<Image />);
  await waitFor(() => image);
  expect(image).toBeTruthy();
  expect(image.toJSON()).toMatchSnapshot();
});

test('BackgroundImage', async () => {
  const backgroundImage = await render(<BackgroundImage />);
  await waitFor(() => backgroundImage);
  expect(backgroundImage).toBeTruthy();
  expect(backgroundImage.toJSON()).toMatchSnapshot();
});

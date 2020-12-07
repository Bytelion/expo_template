import { AsyncStorage } from 'react-native';
import { isEmpty } from 'lodash';
import { authService } from '@services';
import actionTypes from './types';

const loadAuth = () => async dispatch => {
  const storedItems = {};
  const asyncStorage = await AsyncStorage.multiGet(['username', 'authToken']);

  asyncStorage.map(array =>
    Object.assign(storedItems, { [array[0]]: array[1] })
  );

  dispatch({
    type: actionTypes.SET_AUTH,
    payload: {
      hasAuth: !isEmpty(storedItems.authToken),
      username: storedItems.username,
      authToken: storedItems.authToken,
    },
  });
};

const authenticate = data => async dispatch => {
  const result = await authService.authenticate(data);
  const { username } = data;
  const authToken = result.data;

  await AsyncStorage.multiSet([
    ['username', username],
    ['authToken', authToken],
  ]);

  dispatch({
    type: actionTypes.SET_AUTH,
    payload: {
      hasAuth: true,
      username,
      authToken,
    },
  });
};

const removeAuth = () => async dispatch => {
  await AsyncStorage.multiRemove(['authToken'], () => {
    dispatch({
      type: actionTypes.REMOVE_AUTH,
    });
  });
};

export { loadAuth, authenticate, removeAuth };

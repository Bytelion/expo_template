import axios from 'axios';
import appConfig from '@config';
import store from '@store';
import actionTypes from '@store/actions/types';

const client = axios.create(appConfig.api);

const requestPending = (boolean) =>
  store.dispatch({
    type: actionTypes.SET_REQUEST_PENDING,
    payload: boolean,
  });

const setError = (error) =>
  store.dispatch({
    type: actionTypes.SET_ALERT,
    payload: {
      type: 'error',
      message: error,
    },
  });

// Magento Services

// Request interceptor
client.interceptors.request.use(
  (config) => {
    requestPending(true);

    const { auth } = store.getState();

    Object.assign(config.headers, {
      Authorization: `bearer ${auth.authToken}`,
    });

    return config;
  },
  (error) => {
    requestPending(false);

    if (error && error.response) {
      const { data } = error.response;

      setError(data);
    }

    return Promise.reject();
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    requestPending(false);

    return response;
  },
  (error) => {
    requestPending(false);

    if (error && error.response) {
      const { data } = error.response;

      setError(data);
    }

    return Promise.reject();
  }
);

export default client;

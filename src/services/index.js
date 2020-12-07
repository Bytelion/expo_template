import axios from 'axios';
import appConfig from '@config';
import store from '@store';
import actionTypes from '@store/actions/types';

const client = axios.create(appConfig.api);

const requestPending = boolean =>
  store.dispatch({
    type: actionTypes.SET_REQUEST_PENDING,
    payload: boolean,
  });

const setError = error =>
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
  config => {
    requestPending(true);

    const { auth } = store.getState();

    Object.assign(config.headers, {
      Authorization: `bearer ${auth.authToken}`,
    });

    return config;
  },
  error => {
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
  response => {
    requestPending(false);

    return response;
  },
  error => {
    requestPending(false);

    if (error && error.response) {
      const { data } = error.response;

      setError(data);
    }

    return Promise.reject();
  }
);

// Auth Services
const authService = {
  authenticate(data) {
    return client.request({
      method: 'post',
      url: '/V1/integration/admin/token',
      data,
    });
  },
};

// Product Services
const productService = {
  getProduct(sku) {
    return client.request({
      method: 'get',
      url: `/V1/products/${sku}`,
    });
  },
  createProduct(data) {
    return client.request({
      method: 'post',
      url: '/V1/products',
      data,
    });
  },
  updateProduct(sku, data) {
    return client.request({
      method: 'put',
      url: `/V1/products/${sku}`,
      data,
    });
  },
  addImage(sku, data) {
    return client.request({
      method: 'post',
      url: `/V1/products/${sku}/media`,
      data,
    });
  },
};

export { authService, productService };

import client from './api';

const authService = {
  authenticate(data) {
    return client.request({
      method: 'post',
      url: '/V1/integration/admin/token',
      data,
    });
  },
  register(data) {
    return client.request({
      method: 'post',
      url: '/V1/integration/admin/register',
      data,
    });
  },
};

export default authService;

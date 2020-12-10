import * as authActions from './auth';
import * as commonActions from './common';
import * as notificationActions from './notifications';

const actions = {
  ...authActions,
  ...commonActions,
  ...notificationActions,
};

export default actions;

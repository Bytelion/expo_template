import * as authActions from './auth';
import * as commonActions from './common';
import * as productActions from './product';

const actions = {
  ...authActions,
  ...commonActions,
  ...productActions,
};

export default actions;

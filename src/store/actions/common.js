import registerNotifications from '@components/common/Helpers/registerNotifications';
import { loadAuth } from './auth';

// Exported actions
const initialize = () => (dispatch, getState) => {
  // Resolve auth prior to subsequent promises
  const authPromise = new Promise(resolve => resolve(dispatch(loadAuth())));
  return authPromise.then(() => {
    const { hasAuth } = getState().auth;

    // Add initial promises that do not require auth
    const promises = [];
    if (hasAuth) {
      promises.push(dispatch(registerNotifications()));
    }
    return Promise.all(promises);
  });
};

export { initialize };

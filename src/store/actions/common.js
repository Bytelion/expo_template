import { loadAuth } from './auth';

// Exported actions
const initialize = () => dispatch => {
  // Resolve auth prior to subsequent promises
  const authPromise = new Promise(resolve => resolve(dispatch(loadAuth())));

  return authPromise.then(() => null);
};

export { initialize };

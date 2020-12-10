import actionTypes from '../actions/types';

export default (
  state = {
    hasAuth: false,
    username: false,
    authToken: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        hasAuth: action.payload.hasAuth,
        username: action.payload.username,
        authToken: action.payload.authToken,
      };
    case actionTypes.REMOVE_AUTH:
      return {
        ...state,
        hasAuth: false,
        authToken: null,
      };
    default:
      return state;
  }
};

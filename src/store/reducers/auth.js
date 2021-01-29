import actionTypes from '../actions/types';

export default (
  state = {
    hasAuth: false,
    authToken: null,
    username: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return {
        ...state,
        hasAuth: action.payload.hasAuth,
        authToken: action.payload.authToken,
        username: action.payload.username,
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

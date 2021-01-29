import actionTypes from '../actions/types';

export default (
  state = {
    requestPending: false,
    alert: {
      type: null,
      message: null,
    },
  },
  action
) => {
  switch (action.type) {
    case actionTypes.CLEAR_ALERT:
      return {
        ...state,
        alert: {
          type: null,
          message: null,
        },
      };
    case actionTypes.SET_ALERT:
      return { ...state, alert: action.payload };
    case actionTypes.SET_REQUEST_PENDING:
      return { ...state, requestPending: action.payload };
    default:
      return state;
  }
};

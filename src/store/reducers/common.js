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
    case actionTypes.SET_REQUEST_PENDING:
      return { ...state, requestPending: action.payload };
    case actionTypes.SET_ALERT:
      return { ...state, alert: action.payload };
    case actionTypes.CLEAR_ALERT:
      return {
        ...state,
        alert: {
          type: null,
          message: null,
        },
      };
    default:
      return state;
  }
};

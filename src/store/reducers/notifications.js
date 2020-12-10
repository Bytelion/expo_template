import actionTypes from '../actions/types';

export default (
  state = {
    notifications: [],
    notificationCount: 0,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.HANDLE_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
        notificationCount: state.notificationCount + 1,
      };
    default:
      return state;
  }
};

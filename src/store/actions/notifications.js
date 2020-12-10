import actionTypes from './types';

const handleNotification = notification => async dispatch => {
  dispatch({
    type: actionTypes.HANDLE_NOTIFICATION,
    payload: notification.request.content.data,
  });
};

export { handleNotification };

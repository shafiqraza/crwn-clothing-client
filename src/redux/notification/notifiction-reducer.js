import actionTypes from "./action-types";

const INITTIAL_STATE = {
  showNotification: false,
  showLoading: false
};

const notificationReducer = (state = INITTIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        showNotification: false,
      };
    case actionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        showNotification: true,
      };
    default:
      return state;
  }
};

export default notificationReducer;

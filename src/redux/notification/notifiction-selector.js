import { createSelector } from "reselect";

const selectNotification = state => state.notification;

export const selectNotificationShow = createSelector(
  [selectNotification],
  notification => notification.showNotification
);

export const selectLoading = createSelector(
  [selectNotification],
  notification => notification.showLoading
);
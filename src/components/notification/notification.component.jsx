import React from "react";

import { connect } from "react-redux";

import { selectNotificationShow } from "../../redux/notification/notifiction-selector";

import { createStructuredSelector } from "reselect";

import { closeNotification } from "../../redux/notification/notification-actions";

import {
  NotificationContainer,
  NotificationTitle,
  NotificationSubTitle,
  CloseButton,
} from "./notification.styles";

const Notification = ({ showNotificaton, closeNotification }) => {
  return showNotificaton ? 
  (
    <NotificationContainer>
      <NotificationTitle>Thank you for shopping :)</NotificationTitle>
      <NotificationSubTitle>Your order will deliver ASAP!</NotificationSubTitle>
      <CloseButton onClick={ closeNotification }>&#10005;</CloseButton>
    </NotificationContainer>
  ) 
  : null;
}

const mapDispatchToProps = dispatch => ({
  closeNotification: () => dispatch(closeNotification())
});

const mapStateToProps = createStructuredSelector({
  showNotificaton: selectNotificationShow
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

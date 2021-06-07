import React, { useEffect, lazy, Suspense } from "react";
import { GlobalStyles } from "./gloabal-styles";

import Header from "./components/header/header.component";
import Notification from "./components/notification/notification.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import { checkUserSession } from "./redux/user/user-action";
import { closeNotification } from "./redux/notification/notification-actions";

import { selectCurrentUser } from "./redux/user/user-selector";
import { selectNotificationShow } from "./redux/notification/notifiction-selector";

import { createStructuredSelector } from "reselect";

// this is call lazy import. benefit of lazy loading is it will only import the file when needs.
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shopPage.component"));
const SigninAndSignup = lazy(() =>
  import("./pages/signin-and-signup-page/signin-and-signup-page.component")
);
const Checkout = lazy(() => import("./pages/checkout/checkout.component"));

const App = ({ checkUserSession, currentUser, notificationISShowing, hideNotification }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    setTimeout(() => {
      hideNotification();
    }, 5000);
  }, [notificationISShowing, hideNotification])

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Notification />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SigninAndSignup />
              }
            />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
  hideNotification: () => dispatch(closeNotification())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  notificationISShowing: selectNotificationShow
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

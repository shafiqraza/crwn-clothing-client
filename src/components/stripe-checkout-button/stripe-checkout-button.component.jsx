import React from "react";

import axios from "axios";

import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart-action";

import { useHistory } from "react-router-dom";

import { showNotification } from "../../redux/notification/notification-actions";

import StripeCheckoutButton from "react-stripe-checkout";

const StripeButton = ({
  total,
  clearCart,
  showNotification,
  showLoading,
  hideLoading,
}) => {
  const totalInCents = total * 100;
  const publishableKey =
    "pk_test_51IjRDnKcKpgSr3msjypEU8M7PMtCsV4rG4QZE3xqZT8eep37o8msLKsUtlZB3iCwBVq3iNiRZrR6qlnu0GRuyTXn00JTEYrFFb";

  const history = useHistory();

  const onToken = (token) => {
    history.push("/");

    axios({
      url: "payment",
      method: "POST",
      data: {
        token,
        amount: totalInCents,
      },
    })
      .then((res) => {
        showNotification();
        clearCart();
        // console.log(res);
      })
      .catch((error) => {
        alert("There is issue with your payment.");
        console.log(error);
      });
  };
  return (
    <StripeCheckoutButton
      label="Pay now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${total}`}
      amount={totalInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  showNotification: () => dispatch(showNotification()),
});

export default React.memo(connect(null, mapDispatchToProps)(StripeButton));

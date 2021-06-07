import React from "react";

import { 
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
  EmptyCartMessageContainer,
  EmptyCartMessage
} from "./checkout.styles"

import { connect } from  "react-redux";

import { createStructuredSelector } from "reselect"

import { selectCartItems, SelectCartTotal } from "../../redux/cart/cart-selectors"


import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button.component";

import CustomButton from "../../components/custome-button/custome-button.component";

const Checkout = ({ cartItems, total, history }) => {
  
  const getMonth = () => {
    let month =  new Date().getMonth() + 1;
    if(month < 10) month = '0' + month;
    return month;
  };
  const getYear = () => {
    let year =  JSON.stringify(new Date().getFullYear());
    return year.slice(year.length - 2, year.length)
  };

  if(!cartItems.length) {
    return (
      <EmptyCartMessageContainer>
        <EmptyCartMessage>Your cart is empty!</EmptyCartMessage>
        <CustomButton handleClick={() => history.push("/shop")} >GO TO SHOP</CustomButton> 
      </EmptyCartMessageContainer>
    );
  }else 
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))
      }
      <TotalContainer>
        <span>Total: {total}</span>
      </TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: {`${getMonth()} / ${getYear()}`} - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton total={total} />
    </CheckoutPageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: SelectCartTotal
});

export default React.memo(connect(mapStateToProps)(Checkout));
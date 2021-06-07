import React from "react";

import CustomButton from "../custome-button/custome-button.component";

import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { cartDropdownAction } from "../../redux/cart/cart-action";

import { withRouter } from "react-router-dom";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles"
// if we dont pass the second argument to connect then our component will automatically get the dispatch() as props
const CartDropdown  = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItems>
      { cartItems.length ?
          cartItems.map(item => <CartItem key={item.id} item={item}/>)
        : <EmptyMessage>Your cart is empty.</EmptyMessage>  
      }
    </CartItems>

    <CustomButton handleClick={() => {
        history.push("/checkout")
        dispatch(cartDropdownAction())
      }
    }>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(React.memo(connect(mapStateToProps)(CartDropdown)));
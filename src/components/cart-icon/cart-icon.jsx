import React from "react";

import { connect } from "react-redux";

import {cartDropdownAction} from "../../redux/cart/cart-action"

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import { createStructuredSelector } from "reselect";

import { CartIconContainer, CartSvgIcon, ItemCountContainer } from "./cart-icon.styles";

const CartIcon = ({ toggleCartDropdown,itemsCount }) => (
  <CartIconContainer onClick={toggleCartDropdown}>
    <CartSvgIcon />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartIconContainer>
);


const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(cartDropdownAction())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount 
});


export default React.memo(connect(mapStateToProps, mapDispatchToProps)(CartIcon));
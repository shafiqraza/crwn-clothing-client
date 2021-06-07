import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantitySpan,
  PriceSpan,
  ValueSpan,
  ArrowContainer,
  RemoveButton
} from "./checkout-item.styles";

import { connect } from "react-redux";

import { ClearCartItem, addItem, removeCartItem } from "../../redux/cart/cart-action"


const CheckoutItem = ({item, clearCartItem, removeItem, addItem}) => {
  const {name, price, quantity, imageUrl} = item
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
      <ImageContainer>{ name }</ImageContainer>
      <QuantitySpan>
        <ArrowContainer onClick={ () => removeItem(item) }>&#10094;</ArrowContainer>
        <ValueSpan>{ quantity }</ValueSpan>
        <ArrowContainer onClick={ () => addItem(item) }>&#10095;</ArrowContainer>
      </QuantitySpan>
      <PriceSpan>{ price }</PriceSpan>
      <RemoveButton onClick={() => clearCartItem(item)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    clearCartItem: item => dispatch(ClearCartItem(item)),
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addItem(item))
  }
}
export default React.memo(connect(null, mapDispatchToProps)(CheckoutItem));
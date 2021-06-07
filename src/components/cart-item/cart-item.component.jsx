import React from "react";

// import "./cart-item.styles.scss";
import { CartItemContainer, ItemDetailsContainer, NameSpan, PriceSpan } from "./cart-item.styles";

const CartItem = ({item: {name, imageUrl, price, quantity}}) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item-img"/>
    <ItemDetailsContainer>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>{quantity} x ${price}</PriceSpan>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
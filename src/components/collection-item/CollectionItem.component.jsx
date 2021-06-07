import React from "react";

import CustomButton from "../custome-button/custome-button.component";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart-action";

import { CollectionItemContainer, BgImage, CollectionFooterContainer, NameSpan, PriceSpan } from "./collection-item.styles"

const CollectionItem = ({item, addItem}) => {

  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BgImage backgroundImage={imageUrl} />
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>${price}</PriceSpan>
      </CollectionFooterContainer>
      <CustomButton 
        inverted
        handleClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  )
};


const mapDispatchToPorps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});
export default React.memo(connect(null, mapDispatchToPorps)(CollectionItem));

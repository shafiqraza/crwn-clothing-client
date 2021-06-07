import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;  
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Name_Quantity_Price_Styles = css`
  width: 23%;
`;

export const NameSpan = styled.span`
  ${Name_Quantity_Price_Styles}
`;

export const PriceSpan = styled.span`
  ${Name_Quantity_Price_Styles}
`;

export const QuantitySpan = styled.span`
  ${Name_Quantity_Price_Styles}
  display: flex;
  justify-content: start;
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const ValueSpan = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    padding: 0;
  }
`;
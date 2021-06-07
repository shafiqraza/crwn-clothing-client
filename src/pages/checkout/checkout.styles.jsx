import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:nth-child(4) {
    width: 20%;
  }

  &:last-child {
    width: 11%;
    text-align: right;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningContainer = styled.div`
  font-size: 24px;
  color: red;
  margin: 24px 0;
  text-align: center;
`;

export const EmptyCartMessageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-top: 70px;
`;

export const EmptyCartMessage = styled.h2`
  font-size: 36px;
`;
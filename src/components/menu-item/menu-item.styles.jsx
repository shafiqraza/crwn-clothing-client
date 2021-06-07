import styled, { css } from "styled-components";

const LargeItemStyles = css`
  height: 380px;
`;

const largeItem = props => props.size ? LargeItemStyles : null;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${largeItem}

  @media only screen and (max-width: 800px){
    height: 200px 
  }
`;

const getBgImage = props => props.backgroundImage;

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${getBgImage});
`;

export const ContentCotainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: #fff;
  opacity: .7;
  position: absolute;
`;

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuItemSubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
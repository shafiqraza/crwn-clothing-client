import styled, { css } from "styled-components";

const ButtonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoggleButtonStyles = css`
  background-color: #4285F4;
  color: #fff;

  &:hover {
    background-color: darken(#4285F4, 5);
    border: none
  }

`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: .7;

  &:hover {
    background-color: black;
    color: white;
    opacity: 1;
  }

  @media only screen and (max-width: 800px){
    top: 75%;
  }
`;

const getButtonStyles = props => {
  if(props.isGoogleBtn) return GoggleButtonStyles;

  if(props.inverted) return invertedButtonStyles;

  return ButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 160px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: 500;
  cursor: pointer;
  border: none;

  ${getButtonStyles}
  @media only screen and (max-width: 800px){
    min-width: 130px;
  } 
`;
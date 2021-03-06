import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const GoToMsg = styled.span`
  margin-top: 20px;
  
  span {
    cursor: pointer;
    text-decoration: underline; 
  }
`;
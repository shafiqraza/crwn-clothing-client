import styled from "styled-components";

export const NotificationContainer = styled.div`
  width: 40vw;
  background-color: #fff; 
  position: fixed;
  z-index: 100;
  top: 7px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 100px;
  box-shadow: 2px 4px 3px rgb(0 0 0 / 7%);
  border: 1px solid #eee;
  text-align: center;

  @media only screen and (max-width: 800px){
    width: 70vw;
  }

  @media only screen and (max-width: 450px){
    width: 95vw;
  }
`;

export const NotificationTitle = styled.h5`
  font-size: 24px;
  margin: 15px 0;
  padding: 0;
`;

export const NotificationSubTitle = styled.p`
font-size: 18px;
  margin: 0;
  padding: 0;
`;

export const CloseButton = styled.div`
  padding: 10px;
  position: absolute;
  top: 0;
  right: 1px;
  font-size: 20px;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
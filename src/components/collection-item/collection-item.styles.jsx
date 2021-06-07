import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  position: relative;


  button {
    opacity: 0;
  }

  &:hover{
    button { opacity: .8; }
    .image { opacity: .8; }
  }

  @media only screen and (max-width: 800px){
    width: 44vw;
    height: 300px;

    :not(first-child) {
      margin-top: 20px;
    }
    
    &:hover{
      button { opacity: unset; }
      .image { opacity: unset; }
    }


    button {
      opacity: .9;
    }
  }

  @media only screen and (max-width: 375px){
    width: 80vw;
  }
`;

const getBgImage = props => props.backgroundImage;

export const BgImage = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  background-image: url(${getBgImage});
  background-size: cover;
  background-position: center;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceSpan = styled.span`
  width: 10%;
`;


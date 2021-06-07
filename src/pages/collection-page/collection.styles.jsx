import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 800px){
    align-items: center;
  }
  
`;


export const TitleContainer = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
`;


export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 800px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    
    & > div {
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 350px){
    grid-template-columns: 1fr;
  }
`;
import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media only screen and (max-width: 800px){
    align-items: center;
  }

`;

export const TitleHeading = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  justify-content: center;

  @media only screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media only screen and (max-width: 375px){
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
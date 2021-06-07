import React from "react";
import Directory from "../../components/directory/directory.component"
import { HomePageContainer } from "./homePage.styles"
const HomePage = ({history}) => {
  return(
    <HomePageContainer className="homepage">
      <Directory />
    </HomePageContainer>
  );
  
}

export default React.memo(HomePage);
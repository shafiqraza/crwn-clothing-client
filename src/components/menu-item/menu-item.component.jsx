import React from "react";
// import "./menu-item.styles.scss";

import { MenuItemContainer, BgImage, ContentCotainer, MenuItemTitle, MenuItemSubTitle } from "./menu-item.styles";

import { withRouter } from "react-router-dom";

const MenuItem = ({title, imageUrl, id, size, history, linkUrl, match}) => {
  return (
    <MenuItemContainer
      size={ size }
      onClick={() => history.push(`${match.url}${linkUrl}`) }
    >
      <BgImage
        backgroundImage={ imageUrl }
      />
      <ContentCotainer>
        <MenuItemTitle>{ title.toUpperCase() }</MenuItemTitle>
        <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
      </ContentCotainer>
    </MenuItemContainer>
  );
}

export default withRouter(React.memo(MenuItem));
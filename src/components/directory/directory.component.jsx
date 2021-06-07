import React from "react";

import { DirectoryContainer } from "./directory.styles";

import { selectSections } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux"

import MenuItem from  "../menu-item/menu-item.component"
import { createStructuredSelector } from "reselect";


const Directory = ({sections}) => {
  return (
    <DirectoryContainer>
      {
        sections.map(({title, imageUrl, id, size, linkUrl}) => {
          return (
            <MenuItem
              title={title}
              imageUrl={imageUrl}
              id={id}
              key={id}
              size={size}
              linkUrl={linkUrl}
            />
          );
        })
      }
    </DirectoryContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default React.memo(connect(mapStateToProps)(Directory));
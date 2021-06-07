import React from "react";
import PreviewItem from "../collection-item/CollectionItem.component";
import {
  CollectionPreviewContainer,
  TitleHeading,
  PreviewContainer,
} from "./collection-preview.styles";

const PreviewCollection = ({ title, items, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <TitleHeading
        onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
      >
        {title.toUpperCase()}
      </TitleHeading>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default React.memo(PreviewCollection);

import React from "react";

import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../../components/collection-item/CollectionItem.component";

import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection.styles"

const CollectionPage = ({ match, collection }) => {
  return (
    <CollectionPageContainer>
      <TitleContainer>
        {collection.title}
      </TitleContainer>
      <ItemsContainer>
        {
          collection.items.map(collect =>
            <CollectionItem key={ collect.id } item={collect} />
          )
        }
      </ItemsContainer>
    </CollectionPageContainer>
  )
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default React.memo(connect(mapStateToProps)(CollectionPage));
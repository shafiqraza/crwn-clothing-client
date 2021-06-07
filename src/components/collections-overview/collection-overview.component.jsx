import React from "react";

import { CollectionsOverviewContainer } from "./collection-overview.styles";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionsOverview = React.memo(({ collections, history, match }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, title, items }) => (
      <CollectionPreview
        key={id}
        items={items}
        title={title}
        history={history}
        match={match}
      />
    ))}
  </CollectionsOverviewContainer>
));
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);

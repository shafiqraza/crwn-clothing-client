import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsNotFetchedYet } from "../../redux/shop/shop-selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsNotFetchedYet
});

const CollectionsContainer = connect(mapStateToProps)(React.memo(WithSpinner(CollectionsOverview)));


export default CollectionsContainer;
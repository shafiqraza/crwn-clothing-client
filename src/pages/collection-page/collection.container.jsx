import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsNotFetchedYet } from "../../redux/shop/shop-selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.compoment";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsNotFetchedYet
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
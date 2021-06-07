import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionParamsId => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionParamsId] : null
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionsNotFetchedYet = createSelector(
  [selectShop],
  shop => !!!shop.collections
)

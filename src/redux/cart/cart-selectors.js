import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, currentItem) => acc + currentItem.quantity , 0)
);

export const SelectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumalator, currentItem) => accumalator + currentItem.quantity * currentItem.price, 0)
)
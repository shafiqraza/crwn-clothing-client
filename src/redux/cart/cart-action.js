import CartActionTypes from "./action-types";

export const cartDropdownAction = () => {
  return {type: CartActionTypes.TOGGLE_CART_DROPDOWN}
};

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const ClearCartItem = item => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item
})

export const removeCartItem = item => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
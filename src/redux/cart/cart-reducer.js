import CartActionTypes from './action-types';
import { addItemToCart, removeCartItem } from "./cart-utils"

const INITIAL_STATE = {
  isHidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        isHidden: !state.isHidden
      }

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload)
      }

      case CartActionTypes.CLEAR_CART:
        return {
          ...state,
          cartItems: []
        }
    default:
    return state;
  }
}

export default cartReducer;
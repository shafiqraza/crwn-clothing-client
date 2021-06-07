import userActionTypes from "./userActionTypes"
const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_SUCCESS: 
      return {
        ...state,
        currentUser: action.payload
      }
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null
      }
    case userActionTypes.SIGN_OUT_SUCCESS: 
      return {
        ...state,
        currentUser: null,
        errorMessage: null
      }
    case userActionTypes.SIGN_UP_FAILED:
    case userActionTypes.SIGN_OUT_FAILED:
    case userActionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
    return state
  }
}

export default userReducer;
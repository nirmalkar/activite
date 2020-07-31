import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  USER_INFO_MODAL_VISIBLE,
} from "../../constants/actionTypes/userActionTypes";

function userReducer(state = { users: null }, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, users: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function userInfoModalReducer(state = { userInfoModalVisible: false }, action) {
  switch (action.type) {
    case USER_INFO_MODAL_VISIBLE:
      return { ...state, userInfoModalVisible: action.payload };
    default:
      return state;
  }
}

export { userReducer, userInfoModalReducer };

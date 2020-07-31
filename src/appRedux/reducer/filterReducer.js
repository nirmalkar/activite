import { FILTER_USERS } from "../../constants/actionTypes/filterActionTypes";

function searchUserReducer(state = { searchUser: "" }, action) {
  switch (action.type) {
    case FILTER_USERS:
      return { searchUser: action.payload };
    default:
      return state;
  }
}

export { searchUserReducer };

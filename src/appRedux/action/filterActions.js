import { FILTER_USERS } from "../../constants/actionTypes/filterActionTypes";

const filterUser = (data) => (dispatch) => {
  dispatch({ type: FILTER_USERS, payload: data });
};
export { filterUser };

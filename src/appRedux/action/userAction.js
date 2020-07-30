import axios from "axios";
import { BASE_URL } from "../../constants/util/index";
const {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} = require("../../constants/actionTypes/userActionTypes");

const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/members`);
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_USER_FAIL, payload: err.message });
  }
};

export { getUsers };

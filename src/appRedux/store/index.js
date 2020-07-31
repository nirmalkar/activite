import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer, userInfoModalReducer } from "../reducer/userReducer";
import { searchUserReducer } from "../reducer/filterReducer";

const initialState = {};

const reducer = combineReducers({
  userData: userReducer,
  visibleUserInfoModal: userInfoModalReducer,
  userSearch: searchUserReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

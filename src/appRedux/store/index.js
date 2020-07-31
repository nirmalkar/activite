import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer, userInfoModalReducer } from "../reducer/userReducer";

const initialState = {};

const reducer = combineReducers({
  userData: userReducer,
  visibleUserInfoModal: userInfoModalReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

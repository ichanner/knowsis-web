import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./rootReducer"

// Creates the Redux store with Thunk middleware for async actions
const middlewares = [thunk];	
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
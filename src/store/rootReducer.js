import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";

// Combines reducers into the root reducer

export default combineReducers({

	auth: authSlice
});
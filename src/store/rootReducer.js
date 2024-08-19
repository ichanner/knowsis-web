import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import coverSlice from "../features/covers/coverSlice"
// Combines reducers into the root reducer

export default combineReducers({

	auth: authSlice,
	covers: coverSlice
});
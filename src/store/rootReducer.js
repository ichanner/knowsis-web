import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import coverSlice from "../features/covers/coverSlice"
import librarySlice from "../features/library/librarySlice"
// Combines reducers into the root reducer

export default combineReducers({

	auth: authSlice,
	library: librarySlice,
	covers: coverSlice
});
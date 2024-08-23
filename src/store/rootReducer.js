import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import coverSlice from "../features/covers/coverSlice"
import librarySlice from "../features/library/librarySlice"
import libraryUISlice from "../features/library/uiSlice"

// Combines reducers into the root reducer

export default combineReducers({

	auth: authSlice,
	library: librarySlice,
	library_ui: libraryUISlice,
	covers: coverSlice
});
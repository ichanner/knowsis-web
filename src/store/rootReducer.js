import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";
import documentSlice from "../features/documents/documentSlice"
import librarySlice from "../features/library/stores/librarySlice"
import libraryUISlice from "../features/library/stores/uiSlice"

// Combines reducers into the root reducer

export default combineReducers({

	auth: authSlice,
	library: librarySlice,
	library_ui: libraryUISlice,
	documents: documentSlice
});
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library ui state management
const uiSlice = createSlice({

	name: 'library_ui',

	initialState: {

		list_expanded: true,  // Initial state indicating if the library list is expanded

	},

	reducers: {

		// Reducer to set the list_expanded state

		setExpanded: (state, action) => {

			state.list_expanded = action.payload
		}
	}

})

// Selector to access the UI state related to the library
const selectUIState = (state) => state.library_ui

// Export the setExpanded action to be used in components
export const { setExpanded } = uiSlice.actions;

// Selector to get the list_expanded state from the UI state
export const selectListExpanded = createSelector([selectUIState], 

	(uiState) => uiState.list_expanded
)

// Export the reducer to be used in the store
export default uiSlice.reducer
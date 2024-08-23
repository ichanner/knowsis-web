import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library ui state management
const uiSlice = createSlice({

	name: 'library_ui',

	initialState: {

		list_expanded: true,

	},

	reducers: {

		setExpanded: (state, action) => {

			state.list_expanded = action.payload
		}
	}

})


const selectUIState = (state) => state.library_ui

export const { setExpanded } = uiSlice.actions;

export const selectListExpanded = createSelector([selectUIState], (uiState) => uiState.list_expanded)

export default uiSlice.reducer
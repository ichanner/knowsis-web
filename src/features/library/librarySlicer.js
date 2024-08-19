import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library state management
const libraryReducer = createSlice({

	name: 'library',

	initialState: {

		library:[

			{id: '123', name: "Library", cover_url: '' }
		],

		pending: false,
		error: false
	},

	reducers: {}

})


const selectLibraryState = (state) => state.library

export const selectError = createSelector([selectLibraryState], (libraryState) => libraryState.error)
export const selectPendng = createSelector([selectLibraryState], (libraryState) => libraryState.pending)
export const selectLibraries = createSelector([selectLibraryState], (libraryState) => libraryState.library)
import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library state management
const librarySlice = createSlice({

	name: 'library',

	initialState: {

		library:[

			{ id: '1', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg', document_count: 45, creator_username: 'Ian Channer' },
			{ id: '2', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg', document_count: 45, creator_username: 'Ian Channer' },
			{ id: '3', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg', document_count: 45, creator_username: 'Ian Channer' },
			{ id: '4', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg', document_count: 45, creator_username: 'Ian Channer' },
			{ id: '5', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg', document_count: 45, creator_username: 'Ian Channer' },
			
		], 

		pending: false, //State indicating if a request is pending

		error: false // State indicating if there was an error from request
	},

	reducers: {}

})

// Selector to access the entire library state
const selectLibraryState = (state) => state.library

// Selector to get the error state from the library state
export const selectError = createSelector([selectLibraryState], 

	(libraryState) => libraryState.error
);

// Selector to get the pending state from the library state
export const selectPending = createSelector([selectLibraryState], 

	(libraryState) => libraryState.pending
);

// Selector to get an array of library IDs from the library state
export const selectLibraries = createSelector([selectLibraryState], 

	(libraryState) => libraryState.library?.map(({id})=> id)
)

// This is a dynamic selector that returns another selector
export const selectLibraryById = (libraryId) => createSelector( [selectLibraryState],

    ({library}) => {

    	return library?.find((library) => library.id === libraryId)

    }
);

// Export the reducer to be used in the store
export default librarySlice.reducer
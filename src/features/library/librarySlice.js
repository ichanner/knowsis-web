import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library state management
const librarySlice = createSlice({

	name: 'library',

	initialState: {

		library:[

			{ id: '123', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '123', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '123', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '123', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '123', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			
		],

		pending: false,
		error: false
	},

	reducers: {}

})


const selectLibraryState = (state) => state.library

export const selectError = createSelector([selectLibraryState], (libraryState) => libraryState.error)
export const selectPending = createSelector([selectLibraryState], (libraryState) => libraryState.pending)
export const selectLibraries = createSelector([selectLibraryState], (libraryState) => libraryState.library?.map(({id})=> id))


export const selectLibraryById = (libraryId) => createSelector( [selectLibraryState],

    ({library}) => {

    	return library?.find((library) => library.id === libraryId)

    }
);

export default librarySlice.reducer
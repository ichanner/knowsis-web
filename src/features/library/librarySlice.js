import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for library state management
const librarySlice = createSlice({

	name: 'library',

	initialState: {

		library:[

			{ id: '1', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '2', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '3', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '4', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			{ id: '5', name: "Math", cover_url: 'https://as1.ftcdn.net/v2/jpg/03/22/86/48/1000_F_322864892_a9akJpH9ilrHakt2xsWyL2FiPm7KAS9b.jpg' },
			
		],

		pending: false,

		list_expanded: true,

		error: false
	},

	reducers: {

		setExpanded: (state, action) => {

			state.list_expanded = action.payload
		}
	}

})


const selectLibraryState = (state) => state.library

export const { setExpanded } = librarySlice.actions;

export const selectError = createSelector([selectLibraryState], (libraryState) => libraryState.error)
export const selectPending = createSelector([selectLibraryState], (libraryState) => libraryState.pending)
export const selectLibraries = createSelector([selectLibraryState], (libraryState) => libraryState.library?.map(({id})=> id))
export const selectListExpanded = createSelector([selectLibraryState], (libraryState) => libraryState.list_expanded)

export const selectLibraryById = (libraryId) => createSelector( [selectLibraryState],

    ({library}) => {

    	return library?.find((library) => library.id === libraryId)

    }
);

export default librarySlice.reducer
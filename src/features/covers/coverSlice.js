import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for covers state management
const coversReducer = createSlice({

	name: 'covers',

	initialState: {

		covers: {

			'1': [


					{ id: '123', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', progress: 89  },
					{ id: '124', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', progress: 100  },
					{ id: '126', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', progress: 60  }

				]
		},

		error: false,

		pending: false
	},

	reducers:{} // Define actions and reducers here
})

const selectCoversState = (state) => state.covers;

export const selectCoversPending = createSelector( [selectCoversState], 
	
	(coversState) => coversState.pending
);

export const selectCoversError = createSelector( [selectCoversState], 
	
	(coversState) => coversState.error
);


export const selectCoversFromLibrary = createSelector( [selectCoversState, (_, library_id) => library_id],
  
  (coversState, library_id) => coversState.covers[library_id]?.map(cover => cover.id) || []
);

export const selectCoverById = createSelector( [selectCoversState, (_, library_id, cover_id) => ({ library_id, cover_id })],

  (coverState, { library_id, cover_id }) => {

  	const covers = coverState.covers[library_id]

  	return covers?.find(cover => cover.id == cover_id)
  }

);

export default coversReducer.reducer



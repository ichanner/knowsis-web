import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for documents state management
const documentReducer = createSlice({

	name: 'documents', 

	initialState: { 

		documents: {  // Object to store documents by library ID

			'1': [  

				{ id: '123', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 19, total_pages: 300  },
				{ id: '124', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 100, total_pages: 300  },
				{ id: '126', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 60, total_pages: 300  },
				{ id: '127', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 250, total_pages: 300  },
				{ id: '128', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 60, total_pages: 300  },
				{ id: '129', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 60, total_pages: 300  },
				{ id: '12g', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 60, total_pages: 300  },
				{ id: '12w', cover_url: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-cover-design-template-fd68f626887a20ec0eb2900fb1d979c3_screen.jpg?ts=1636985790', pages_read: 60, total_pages: 300  },

			]
		},

		error: false,  // State for tracking errors

		pending: false  // State for tracking if a request is pending
	},

	reducers:{} // Define actions and reducers here
})

// Selector to access the documents state
const selectDocumentsState = (state) => state.documents;

// Selector to get the pending state from the documents slice
export const selectDocumentsPending = createSelector( [selectDocumentsState], 
	
	(documentsState) => documentsState.pending  // Returns whether a request is pending
);

// Selector to get the error state from the documents slice
export const selectDocumentsError = createSelector( [selectDocumentsState], 
	
	(documentsState) => documentsState.error  // Returns the error state
);

// Selector to get document IDs from a specific library
export const selectDocumentsFromLibrary =  (library_id) => createSelector([selectDocumentsState], 

	(documentsState) => documentsState.documents[library_id]?.map(document => document.id) || []  // Returns an array of document IDs
);

// Selector to get a specific document by ID from a specific library
export const selectDocumentById = (library_id, document_id) => createSelector([selectDocumentsState], 

	(documentState) => {

    	const documents = documentState.documents[library_id];  // Get documents for the specified library
    	
    	return documents?.find(document => document.id == document_id);  // Find and return the document with the specified ID
 	}
 );

export default documentReducer.reducer  

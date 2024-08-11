import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// Slice for authentication state management
const authReducer = createSlice({

	name: 'auth',

	initialState:{

		isAuthenticated: true, //Set to true by default just for now
		user: null,
		loading: false,
		error: null
	},

	reducers:{} // Define actions and reducers here

})

// Selector to access the auth state
const selectAuthState = (state) => state.auth;

// Selector to check if the user is authenticated
export const selectIsAuthenticated = createSelector( 
	[selectAuthState], 
	(authState) => authState.isAuthenticated
);
// Selector to get the current user
export const selectUser = createSelector( 
	[selectAuthState], 
	(authState) => authState.user 
);

export default authReducer.reducer;
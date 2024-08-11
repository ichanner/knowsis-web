import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { useSelector } from 'react-redux';

/**
 * ProtectedRoute Component
 * 
 * Renders child routes if the user is authenticated; otherwise, redirects to login.
 *
 * @returns {JSX.Element} - The child route (Outlet) or a redirect to the login page
 */

const ProtectedRoute = () => {

	const isAuthenticated = useSelector(selectIsAuthenticated);

	return isAuthenticated ? <Outlet/> : <Navigate to='/login' replace/>
}


export default ProtectedRoute;
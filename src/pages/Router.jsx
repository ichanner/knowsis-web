import "../assets/styles/base-styles.css"

import React from "react";
import AppRouter from "./app/Router";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Main Application Router
 * 
 * This component sets up the primary routing for the application using React Router.
 * 
 * - It wraps the routes with `BrowserRouter` to enable client-side routing.
 * - The `Routes` component contains all the route definitions.
 * 
 * Routes:
 * - `/login` and `/register` are public routes, rendering the `Login` and `Register` components respectively.
 * - All other routes (`/*`) are protected by `ProtectedRoute`. If the user is authenticated, 
 *   the `Router` component handles routing within the protected area of the app.
 *
 * @returns {JSX.Element} - The main routing structure of the application.
 */
const Router = () => {

	return (

		<div>

			<BrowserRouter>

				<Routes>

					{/* Public routes for login and registration */}

					<Route path="/login" element={ <Login/> }/>
					<Route path="/register" element={ <Register/> }/>
					
					{/* Protected routes, accessible only if authenticated */}

					<Route element={ <ProtectedRoute/> }>

						<Route path={'/*'} element={ <AppRouter/> }/>

					</Route>

				</Routes>

			</BrowserRouter>

		</div>
	)

}


export default Router;

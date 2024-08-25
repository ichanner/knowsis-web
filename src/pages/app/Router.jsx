import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"

/**
 * Application Router
 * 
 * This component handles routing for a specific part of the application.
 * 
 * - The `Routes` component from React Router is used to define the route structure.
 * - Currently, it defines a single route (`/`) that renders the `Home` component.
 * - In the future, more routes will be defined.
 * 
 * Usage:
 * - This component can be used as part of a larger routing structure or within a 
 *   specific section of the application.
 * 
 * @returns {JSX.Element} - The routing configuration for this section of the application.
 */
export default(()=>{

	return (

		<Routes>

			<Route path="/:library_id" element={ <Dashboard/> }/>

		</Routes>
		
	)

})
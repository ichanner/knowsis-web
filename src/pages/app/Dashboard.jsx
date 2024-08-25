import "./styles.css"
import React from 'react';
import DocumentsGrid from "../../features/documents/componets/DocumentsGrid"
import LibraryPanel from "../../features/library/components/LibraryPanel/LibraryPanel"

/**
 * Library Component
 * 
 * This component serves as the main layout for displaying the library page.
 * It includes two primary sections:
 * 
 * 1. LibraryPanel: Displays the side panel with a list of libraries.
 *    Users can select a library from this panel to view its contents.
 * 
 * 2. CoverList: Displays the grid of covers associated with the selected library.
 *    This grid is populated based on the user's selection in the LibraryPanel.
 * 
 * The layout is managed using a flexbox container (`home-container`) to ensure
 * the LibraryPanel and CoverList are displayed side by side, providing a seamless
 * user experience.
 * 
 * @returns {JSX.Element} The rendered Library component.
 */

const Dashboard = () => {

  	return (
		    
		<div className="dashboard__container">

			<LibraryPanel/>

			<DocumentsGrid/>

		</div>
  	);

};

export default Dashboard;
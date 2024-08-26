import "./styles.css"
import React, { useRef, Dimensions, useState, useCallback, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FixedSizeGrid as Grid } from 'react-window';
import { selectDocumentsFromLibrary } from "../documentSlice";
import { ROW_HEIGHT, MIN_COLUMN_WIDTH } from "../documentConstants"
import AutoSizer from 'react-virtualized-auto-sizer';
import Document from "./Document.jsx";
import ToolBar from "./ToolBar/ToolBar.jsx";
import LibraryHeader from "../../library/components/LibraryHeader/Header"

const DocumentsGrid = () => {

	// Logan
	// this is another comment for testing
	// Roger that Logan
	
	// Retrieve the library_id from the URL parameters
	const { library_id } = useParams();
	
    // Select the documents from the Redux store using the library_id
	const documents = useSelector(selectDocumentsFromLibrary(library_id));
	
	// State for stroing the scroll position 
	const [scrollPos, setScrollPos] = useState(0);


  	const handleScroll = useCallback(({scrollTop}) => {
    
    	setScrollPos(scrollTop)

  	}, [scrollPos]);

	return (

		<div className='documents__grid-container'>
			
			<LibraryHeader scroll_pos={scrollPos}/>

			<ToolBar/>

		    {/* AutoSizer component dynamically calculates the available width and height */}

			<AutoSizer>

				{({height, width}) => {


					if(documents.length <= 0){

						return <div/> 
					}

					const columnCount = Math.max(1, Math.floor(width / MIN_COLUMN_WIDTH)); // Calculate the number of columns based on the available width and the minimum column width
                    const columnWidth = width / columnCount; // Divide available width equally among columns
                    const rowCount = Math.ceil(documents.length / columnCount) + 1;  // Calculate the index of the document in the documents array

					return (

						<Grid
			            
			            	columnCount={columnCount}
			            	and overscanRowCount={10}
			            	rowCount={rowCount}
			            	width={width}
			            	height={height}
			            	onScroll={handleScroll}
						    columnWidth={columnWidth}  
						    rowHeight={ROW_HEIGHT} 
						    
			          	>

				          	{({ rowIndex, columnIndex, style}) => {
			
				       
								// Calculate the index of the document in the documents array
						  		const index = (rowIndex ) * columnCount + columnIndex;

						  		if (index >= documents.length) {
						           
						            return null;  // Return null if the index exceeds the number of documents (no more data)
						        }

						  		const document_id = documents[index]  

						  		return (
						  			

						  			<Document style={style} document_id={document_id} library_id={library_id} /> 

						  		)

  							}}

			          	</Grid>
			        )

	            }}

	        </AutoSizer>

		</div>
	)
}

export default DocumentsGrid;
	
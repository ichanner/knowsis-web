import "./styles.css"

import React, { useRef, Dimensions } from "react";
import AutoSizer from 'react-virtualized-auto-sizer';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FixedSizeGrid as Grid } from 'react-window';
import { selectCoversFromLibrary } from "../coverSlice.js"
import Cover from "./Cover.jsx"
import Header from "./Header/Header.jsx"

const CoversGrid = () => {


	// Logan
	// this is another comment for testing
	// Roger that Logan
	

	//TODO move to constants file
	const ROW_HEIGHT = 350
	const MIN_COLUMN_WIDTH = 200; // Minimum column width to ensure usability

	const { library_id } = useParams();
	const covers = useSelector(state => selectCoversFromLibrary(state, library_id));

	return (

		<div className='cover-list-container'>

			<Header/>


			<AutoSizer className='auto-sizer'>


				{({height, width}) => {

					const columnCount = Math.max(1, Math.floor(width / MIN_COLUMN_WIDTH));
                    const columnWidth = width / columnCount; // Divide available width equally among columns
                    const rowCount = Math.ceil(covers.length / columnCount);

					return (



						<Grid
			            
			            	columnCount={columnCount}
			            	rowCount={rowCount + 1}
			            	width={width}
			            	height={height}
						    columnWidth={columnWidth}  
						    rowHeight={ROW_HEIGHT} 
						    
			          	>

				          	{({ rowIndex, columnIndex, style}) => {


				          		const index = rowIndex * columnCount + columnIndex;

				          		if (index >= covers.length) {
                                   
                                    return null; // Return null for grid cells without data
                                }

				          		const cover_id = covers[index]

				          		return (

			          				<Cover 

			          					style={style} 
			          					cover_id={cover_id} 
			          					library_id={library_id} 
			          				/>

				          		)
				          	}}

			          	</Grid>
			        )

	            }}

	        </AutoSizer>

		</div>
	)
}

export default CoversGrid;
	
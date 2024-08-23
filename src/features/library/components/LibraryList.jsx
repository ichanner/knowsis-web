

import React from "react"
import { FixedSizeList as List } from "react-window"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLibraries, selectPending } from "../librarySlice.js"
import LibraryTab from "./LibraryTab"

//Todo move to constants file 
const TAB_HEIGHT = 100;

const LibraryList = () => {

	const params = useParams()
	const library = useSelector(selectLibraries)

	return (

	    <React.Fragment>

	      { library.length > 0 ?

	        <List

	          height={library.length * TAB_HEIGHT}
	          itemSize={TAB_HEIGHT}
	          itemCount={library.length}
	          
	        >
	        	{ 	

	        		({index, style}) => {

	        			const library_id = library[index]
	        			const is_focused = params.library_id == library_id

	        			return <LibraryTab is_focused={is_focused} library_id={library_id}/>
	        		}
	        	}

	        </List> : null

	      }

	    </React.Fragment>

  	);

}

export default LibraryList






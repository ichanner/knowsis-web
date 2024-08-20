import React from "react"
import { FixedSizeList as List } from "react-window"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectLibraries, selectPending } from "../librarySlice.js"
import LibraryTab from "./LibraryTab"

const TAB_HEIGHT = 100;

const LibraryList = () => {

	const library = useSelector(selectLibraries)

	return (

	    <div>

	      { library.length > 0 ?

	        <List

	          height={library.length * TAB_HEIGHT}
	          itemSize={TAB_HEIGHT}
	          itemCount={library.length}
	          
	        >

	        	{ 	

	        		({index, style}) => {

	        			const library_id = library[index]

	        			return <LibraryTab library_id={library_id}/>
	        		}
	        	}

	        </List> : null

	      }

	    </div>

  	);

}

export default LibraryList






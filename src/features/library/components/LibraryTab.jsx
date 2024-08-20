import "./styles.css"

import React from "react"
import { useSelector } from "react-redux"
import { selectLibraryById } from "../librarySlice.js"

const LibraryTab = ({library_id}) =>{

	const library = useSelector(selectLibraryById(library_id))

	return ( 


		<div className='library-tab__container'>

			<img className='library-tab__cover' src={library.cover_url}/> 

			<div className='library-tab__name'> {library.name} </div>

 
		</div> 

	)
}


export default LibraryTab
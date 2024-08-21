import "./styles.css"

import React, { useCallback } from "react"
import { selectListExpanded } from "../librarySlice.js"
import { useSelector } from "react-redux"
import { selectLibraryById } from "../librarySlice.js"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"

const LibraryTab = ({library_id, is_focused}) =>{

	const library = useSelector(selectLibraryById(library_id))
	const expanded = useSelector(selectListExpanded)

	const tabClassname = classNames({ 

		'library-tab__container': expanded, 
		'library-tab__container--collapsed': !expanded,
		'library-tab__container--collapsed--selected': !expanded && is_focused,
		'library-tab__container--selected': is_focused
    })

	const navigate = useNavigate()
	
	const handleClick = useCallback(() => {

		navigate(`/${library_id}`)

	})

	return ( 

		<div onClick={handleClick} className={tabClassname}>
	
			<img className='library-tab__cover' src={library.cover_url}/> 
		
			{ expanded && <div className='library-tab__name'> {library.name} </div> }

		</div> 

	)
}


export default LibraryTab
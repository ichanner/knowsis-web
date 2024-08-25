import "./styles.css"
import React from "react"
import Avatar from "../../../../components/Avatar/Avatar"
import { selectLibraryById } from "../../stores/librarySlice"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'

const LibraryHeader = ({scroll_pos}) => {

	const { library_id } = useParams() //Get current library id from URL params
	const { creator_username, cover_url, document_count } = useSelector(selectLibraryById(library_id)) //Get current library meta


	//new height calculated based on scroll position 
	const scroll_threshold = 100
	const initial_height = 30
	const new_height = Math.max(initial_height - (scroll_pos / scroll_threshold) * 100, 0)

	return (


			<div className='header__container' style={{height: `${new_height}%` }}>

				<img className='header__cover' src={cover_url} />

				<div>

					<h1 className='header__title'> Math </h1>

					<div className='header__meta-container'> 

						<Avatar size={1.5}/>

						<span className='header__username'> {creator_username} </span>

						<span> &bull; </span>

						<span> {document_count} Documents </span>

					</div>

				</div>

			</div>


	)

}


export default LibraryHeader 

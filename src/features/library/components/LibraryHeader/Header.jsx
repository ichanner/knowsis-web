import "./styles.css"
import React, { useEffect, useState, useRef } from "react"
import Avatar from "../../../../components/Avatar/Avatar"
import { selectLibraryById } from "../../stores/librarySlice"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { SCROLL_THRESHOLD } from "../../libraryConstants"

const LibraryHeader = ({scroll_pos}) => {

	const { library_id } = useParams() //Get current library id from URL params
	const { creator_username, cover_url, document_count, name } = useSelector(selectLibraryById(library_id)) //Get current library meta
    const coverRef = useRef(null)  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    //new height calculated based on scroll position 
    const handleResize = () => {

        setScreenWidth(window.innerWidth)
    }

    useEffect(() => {

         // Handle resize events
        const handleThrottledResize = () => {

          requestAnimationFrame(handleResize);

        };

        // Attach the event listener
        window.addEventListener('resize', handleThrottledResize);

        // Initial check
        handleResize();

        // Clean up the event listener on component unmount
        return () => {

          window.removeEventListener('resize', handleThrottledResize);

        };

    }, [])

    const new_height = Math.max( coverRef.current?.getBoundingClientRect().height  - (scroll_pos / SCROLL_THRESHOLD) * 100, 0)

	return (


			<div className='header__container' style={{ height: `${new_height}px`}}>

				<img ref={coverRef} className='header__cover' src={cover_url} />

				<div className='header__text-container'>

					<h1 className='header__title'> {name} </h1>

					<div className='header__meta-container'> 

						<Avatar size={1.4}/>

						<span className='header__username'> {creator_username} </span>

						<span> &bull; </span>

						<span> {document_count} Documents </span>

					</div>

				</div>

			</div>


	)

}


export default LibraryHeader 

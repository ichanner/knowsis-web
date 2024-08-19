
import "./styles.css"

import React from 'react'
import { useSelector } from 'react-redux';
import { selectCoverById } from '../coverSlice';


export default ({style, library_id, cover_id}) => {

	const cover = useSelector(state => selectCoverById(state, library_id, cover_id))

//ian 
//another

	return (

		<div style={{...style, display: 'flex', justifyContent: 'center'}}>

				<div className='cover-container'>

					<img className='cover-image' src={cover.cover_url}  />

					<div className='cover-progress-bar-container'>

						<div  className='cover-progress-bar' style={{width: `${cover.progress}%`}}/>

					</div>
					
				</div>


		</div>	
	)
}
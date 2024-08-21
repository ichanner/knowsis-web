
import "./styles.css"

import React from 'react'
import { useSelector } from 'react-redux';
import { selectCoverById } from '../coverSlice';
import Icon from "@mdi/react";
import { mdiDotsHorizontalCircle, mdiPlay, mdiBookPlay } from '@mdi/js';

export default ({style, library_id, cover_id}) => {

	const cover = useSelector(state => selectCoverById(state, library_id, cover_id))

	return (

		<div style={{...style, display: 'flex', justifyContent: 'center'}}>

				<div className='cover-container'>

					<img className='cover-image' src={cover.cover_url}  />
						
					<div className='hover-center_buttons'>
	                  
	                    <Icon
	                        className='hover-settings-button'
	                        path={mdiDotsHorizontalCircle}
	                        onClick={() => console.log('Settings button clicked!')}
	                    />

	                    <Icon              
	                        className='hover-play-button'
	                        path={mdiBookPlay}
	                        onClick={() => console.log('Play button clicked!')}
	                    />

	                </div>
					
					<div className='cover-progress-bar-container'>

						<div className='cover-progress-bar' style={{width: `${cover.progress}%`}}/>

					</div>
					
				</div>


		</div>	
	)
}

import "./styles.css"

import React from 'react'
import { useSelector } from 'react-redux';
import { selectCoverById } from '../coverSlice';
import { mdiDotsHorizontalCircle, mdiPlay, mdiBookPlay, mdiBookEdit, mdiImageEdit, mdiLinkVariant, mdiRestart, mdiCheckCircleOutline, mdiCheckCircle, mdiDelete } from '@mdi/js';
import Icon from "@mdi/react";
import DropDownButton from "../../../components/Dropdown/DropDownButton"
import DropDownInput from "../../../utils/DropdownInput"

export default ({style, library_id, cover_id}) => {

	const cover = useSelector(state => selectCoverById(state, library_id, cover_id))

	return (

		<div style={{...style, display: 'flex', justifyContent: 'center'}}>

				<div className='cover-container'>

					<img className='cover-image' src={cover.cover_url}  />
						
					<div className='hover-center_buttons'>
	                  
	                    <DropDownButton

	                        open_icon_classname='hover-settings-button'
	                        open_icon_path={mdiDotsHorizontalCircle}
	                        buttons={[

	                        	DropDownInput("Change Cover", mdiBookEdit),
	                        	DropDownInput("Copy Link", mdiLinkVariant),
	                        	DropDownInput("Mark Read", mdiCheckCircleOutline),
	                        	DropDownInput("Reset Progress", mdiRestart, true, true),
	                        	DropDownInput("Remove Book", mdiDelete, false, true)

	                        ]}
	                    />

	                    <Icon className='hover-play-button' path={mdiBookPlay} />

	                </div>
					
					<div className='cover-progress-bar-container'>

						<div className='cover-progress-bar' style={{width: `${cover.progress}%`}}/>


					</div>
					
				</div>


		</div>	
	)
}

import "./styles.css"

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectCoverById } from '../coverSlice';
import { mdiDotsHorizontalCircle, mdiPlay, mdiBookPlay, mdiBookEdit, mdiImageEdit, mdiLinkVariant, mdiRestart, mdiCheckCircleOutline, mdiCheckCircle, mdiDelete } from '@mdi/js';
import Icon from "@mdi/react";
import DropDownAnchor from "../../../components/Dropdown/DropDownAnchor"
import DropDownInput from "../../../utils/DropdownInput"

const MenuButton = (props) => {

	return <Icon {...props} className='hover-settings-button' path={mdiDotsHorizontalCircle}/>
}


export default ({style, library_id, cover_id}) => {

	const [is_hovering, setIsHovering] = useState(false)
	const cover = useSelector(state => selectCoverById(state, library_id, cover_id))

	const getColorByProgress = (progress) => {
   
	    const start_color = { r: 192, g: 192, b: 192 }; // light gray
	    const end_color = { r: 255, g: 215, b: 0 }; // gold
	    const r = Math.round(start_color.r + (end_color.r - start_color.r) * (progress / 100));
	    const g = Math.round(start_color.g + (end_color.g - start_color.g) * (progress / 100));
	    const b = Math.round(start_color.b + (end_color.b - start_color.b) * (progress / 100));

	    return `rgb(${r}, ${g}, ${b})`;
	}


	return (

		<div 

			onMouseEnter={()=>setIsHovering(true)} 
			onMouseLeave={()=>setIsHovering(false)} 
		
			style={{...style, display: 'flex', justifyContent: 'center'}}
		>

			<div className='cover-container'>

				<img className='cover-image' src={cover.cover_url}  />
					
				<div className='hover-center_buttons'>
                  
                    <DropDownAnchor

                        AnchorEl={MenuButton}
                        anchor_orgin_vertical='top'
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


                <div className='cover-timestamp-container'>

                	<div className='cover-timestamp-text'> 12 / 300 </div> 

                </div>
				
				<div className='cover-progress-bar-container'>

					<div className='cover-progress-bar' style={{

						backgroundColor: getColorByProgress(cover.progress), 
						width: `${cover.progress}%`

					}}/>

				</div>
				
			</div>


		</div>	
	)
}
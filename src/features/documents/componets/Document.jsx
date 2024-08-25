
import "./styles.css"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectDocumentById } from '../documentSlice';
import { 

	mdiDotsHorizontalCircle, 
	mdiBookPlay, 
	mdiBookEdit, 
	mdiLinkVariant, 
	mdiRestart, 
	mdiCheckCircleOutline, 
	mdiCheckCircle, 
	mdiDelete 

} from '@mdi/js';
import Icon from "@mdi/react";
import DropDownAnchor from "../../../components/Dropdown/DropDownAnchor"
import DropDownInput from "../../../utils/DropdownInput"

export default ({style, library_id, document_id}) => {

	const doc = useSelector(selectDocumentById(library_id, document_id))
	const progress = (doc?.pages_read / doc?.total_pages) * 100

    // Function to dynamically calculate the color of the progress bar based on progress
	const getColorByProgress = (progress) => {
   
	    const start_color = { r: 244, g: 251, b: 7 }; // yellow
	    const end_color = { r: 47, g: 251, b: 7 }; // green
	    
	    const red = Math.round(start_color.r + (end_color.r - start_color.r) * (progress / 100));
	    const green = Math.round(start_color.g + (end_color.g - start_color.g) * (progress / 100));
	    const blue = Math.round(start_color.b + (end_color.b - start_color.b) * (progress / 100));

	    return `rgb(${red}, ${green}, ${blue})`;
	}

    // Menu button component for the dropdown menu
	const MenuButton = (props) => {

		return <Icon {...props} className='document__settings-button' path={mdiDotsHorizontalCircle}/>
	}

	if(doc == null){

		return null;
	}

	return (

		<div style={{...style, display: 'flex', justifyContent: 'center'}}>

			<div className='document__container'>

				{/* Render the cover image */}

				<img className='document__cover-image' src={doc.cover_url} alt="Cover Image" />
					
				<div className='document__buttons-container'>
                  	
                  	{/* Dropdown menu with options like Change Cover, Copy Link, etc. */}
                    
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

                    <Icon className='document__play-button' path={mdiBookPlay} />

                </div>

                {/* Pagecount for document progress */}
                
                <div className='document__pagecount-container'>

                	<div className='document__pagecount-text'> { ` ${doc.pages_read} / ${doc.total_pages} ` } </div> 

                </div>

                {/* Progress bar showing reading progress */}
				
				<div className='document__progress-bar-container'>

					<div className='document__progress-bar' 

						style={{backgroundColor: getColorByProgress(progress), width: `${progress}%`}}

					/>

				</div>
				
			</div>


		</div>	
	)
}
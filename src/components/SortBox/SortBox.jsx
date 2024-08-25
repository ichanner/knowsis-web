import "./styles.css"
import React, {useState} from "react"
import Icon from '@mdi/react';
import {
	mdiSortAlphabeticalVariant, 
	mdiSortClockAscending, 
	mdiSortClockDescending 
} from '@mdi/js'
import DropDownAnchor from "../../components/Dropdown/DropdownAnchor"
import DropDownInput from "../../utils/DropdownInput"

const SortBox = ({custom_theme}) => {

	const [label, setLabel] = useState('Latest')
	const [icon, setIcon] = useState(mdiSortClockAscending)

    // Component for the anchor element of the dropdown
	const SortBoxAnchor = (props) => {

		return (

			<div {...props} className={`sort-box__container ${custom_theme}`}>

				<div className='sort-box__label'> {label} </div> {/* Display the current label */}

				<Icon className='sort-box__icon' path={icon} /> {/* Display the current icon */}

			</div>
		)
	}

	return (

		<DropDownAnchor

	        AnchorEl={SortBoxAnchor} 
	        anchor_orgin_vertical='bottom' // Dropdown opens below the anchor
	        buttons={[

	        	DropDownInput("A-Z", mdiSortAlphabeticalVariant, false, false, () => {

	        		setIcon(mdiSortAlphabeticalVariant)

	        		setLabel('Alphabetical')

	        	}),

	        	DropDownInput("Latest", mdiSortClockAscending, false, false, () => {

	        		setIcon(mdiSortClockAscending)

	        		setLabel('Latest')

	        	}),

	        	DropDownInput("Oldest", mdiSortClockDescending, false, false, () => {

	        		setIcon(mdiSortClockDescending)

	        		setLabel('Oldest')

	        	})
	        ]}
	    />

	)
}

export default SortBox;
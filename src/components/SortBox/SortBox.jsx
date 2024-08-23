
import React, {useState} from "react"
import Icon from '@mdi/react';
import {mdiMagnify, mdiSortAlphabeticalVariant, mdiSortClockAscending, mdiSortClockDescending, mdiFormatListBulleted } from '@mdi/js'
import DropDownAnchor from "../../components/Dropdown/DropdownAnchor"
import DropDownInput from "../../utils/DropdownInput"





const SortBox = ({color_scheme}) => {


	const [label, setLabel] = useState('Latest')
	const [path, setPath] = useState(mdiSortClockAscending)

	let SortBoxButton = (props) => {

		return (

			<div {...props} className={`header-bar-sort-box-container ${props.color_scheme}`}>

				<div className='header-bar-sort-box-label'> {label} </div>

				<Icon className='header-bar-sort-box-icon' path={path} />

			</div>

		)
	}

	return (

		<DropDownAnchor

	        AnchorEl={SortBoxButton}
	        anchor_orgin_vertical='bottom'
	        buttons={[

	        	DropDownInput("A-Z", mdiSortAlphabeticalVariant, false, false, () => {
	        		
	        		setPath(mdiSortAlphabeticalVariant)
	        		setLabel('Alphabetical')

	        	}),
	        	DropDownInput("Latest", mdiSortClockAscending, false, false, () => {

	        		setPath(mdiSortClockAscending)
	        		setLabel('Latest')

	        	}),
	        	DropDownInput("Oldest", mdiSortClockDescending, false, false, () => {

	        		setPath(mdiSortClockDescending)
	        		setLabel('Oldest')

	        	})
	        ]}
	    />

	)


}

export default SortBox;
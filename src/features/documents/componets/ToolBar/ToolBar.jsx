import "./styles.css"

import React from "react"
import Tabs from "../../../../components/FilterTabs/Tabs.jsx"
import TabInput from "../../../../utils/TabInput"
import SearchBox from "../../../../components/SearchBox/SearchBox"
import SortBox from "../../../../components/SortBox/SortBox"


const ToolBar = () => {

	return (

		<div className='tool-bar__container'>

			<div className='tool-bar__child-container'>
				
				<Tabs color_scheme='tool-bar__tab-colors' 
					
					tabs={[ 

						TabInput("In Progress"), 
						TabInput("Not Started"), 
						TabInput("Finshed") 

					]}
				/>

				<div className='tool-bar__group'> 

					<SearchBox custom_theme={'tool-bar__search-theme'} placeholder={'Search Collection'}/>

					<SortBox color_scheme={'tool-bar__sort-box-colors'}/>

				</div>

			</div>

			<div className='tool-bar__seperator'/>

		</div>
	)

}


export default ToolBar 
import "./styles.css"

import React from "react"
import Tabs from "../../../../components/FilterTabs/Tabs.jsx"
import TabInput from "../../../../utils/TabInput"
import SearchBox from "../../../../components/SearchBox/SearchBox"
import SortBox from "../../../../components/SortBox/SortBox"
import UploadBox from "../../../../components/UploadBox/UploadBox.jsx"


const ToolBar = () => {

	return (

		<div className='tool-bar__container'>

			<div className='tool-bar__child-container'>
				

				<Tabs custom_theme='tool-bar__tab-theme' 
					
					tabs={[ 

						TabInput("In Progress"), 
						TabInput("Not Started"), 
						TabInput("Finshed") 

					]}
				/>


				<div className='tool-bar__group'> 

					<UploadBox custom_theme ={'tool-bar__upload-theme'}/>

					<SearchBox custom_theme={'tool-bar__search-theme'} placeholder={'Search Collection'}/>

					<SortBox custom_theme={'tool-bar__sort-box-theme'}/>

				</div>

			</div>

			<div className='tool-bar__seperator'/>

		</div>
	)

}


export default ToolBar 
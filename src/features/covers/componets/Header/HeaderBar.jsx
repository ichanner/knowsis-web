import "./styles.css"

import React from "react"
import Tabs from "../../../../components/FilterTabs/Tabs.jsx"
import TabInput from "../../../../utils/TabInput"
import SearchBox from "../../../../components/SearchBox/SearchBox"
import SortBox from "../../../../components/SortBox/SortBox"


const HeaderBar = () => {

	return (

		<div className='header-bar-container'>
			
			<Tabs 

				color_scheme='tab-colors' 
				
				tabs={[ 

					TabInput("In Progress"), 
					TabInput("Not Started"), 
					TabInput("Finshed") 

				]}

			/>


			<div className='header-bar-tools-container'> 


				<SearchBox  

					color_scheme={'header-bar-search-colors'} 
					placeholder={'Search Collection'}
					full_width={false}
				/>

				
				<SortBox color_scheme={'header-bar-sort-colors'}/>


			</div>


		</div>



	)


}


export default HeaderBar 
import "./styles.css"

import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

/*CSS FILE*/
const StyledTab = styled(Tab)(({ theme }) => ({
              
  width: 'auto', // Responsive width
  borderRadius: '10px', // Rounded corners
  marginRight: '5px',
  color: 'var(--tab-color)', // Custom color
  backgroundColor: 'var(--tab-bg-color)', // Custom background color
  textTransform: 'none', // No uppercase
  '&.MuiTab-root':{
    padding: '1.2rem',
    height: '.5rem',
    minHeight: '100%'
  },
  '&.Mui-selected': { // Styles for selected state
    borderRadius: '10px',
    color: 'var(--selected-tab-color)', // Color when selected
    backgroundColor: 'var(--selected-tab-bg-color)' // Background color when selected
  }
})) 

const FilterTabs = ({parentCallback, tabs, color_scheme}) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {

    if(parentCallback){

      parentCallback(newValue)
    }

    setValue(newValue);

  };

  return (

    <> 

      <Tabs 

        value={value} 
        onChange={handleChange} 
        variant="scrollable" 
        scrollButtons="auto" 
        sx={{display: 'flex', minHeight: '.5rem', alignItems: 'center'}} /* css file */ 
        className={color_scheme}

      >

        {
          tabs.map((tab, index) => (

            <StyledTab   key={index} label={tab.label}/>

          ))

        }
      
      </Tabs>
    
    </>
  );

}

export default FilterTabs

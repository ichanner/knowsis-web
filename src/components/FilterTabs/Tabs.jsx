import "./styles.css"
import React from "react"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const FilterTabs = ({parentCallback, tabs, custom_theme}) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    
    //Check if passed down callback exists 

    if(parentCallback){ 

      parentCallback(newValue)
    }

    setValue(newValue);

  };

  return (

    <React.Fragment> 

      <Tabs 

        value={value} 
        onChange={handleChange} 
        variant="scrollable" 
        scrollButtons="auto" 
        className={custom_theme}
      >

        {
          tabs.map((tab, index) => (

            <Tab className='filter-tab' key={index} label={tab.label} 

              sx={{'&.Mui-selected': {color: 'var(--selected-tab-color)'}}} //Hacky, had to do this so mui styles wouldn't overwrite 

            />

          ))

        }
      
      </Tabs>
    
    </React.Fragment>
  );

}

export default FilterTabs

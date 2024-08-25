import "./styles.css"
import { Icon } from "@mdi/react";
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DropDown from "./DropDown"
import classNames from "classnames"

const DropDownAnchor = ({buttons, onClose, AnchorEl, anchor_orgin_vertical}) => {

  // State to manage the anchor element for the dropdown
  const [anchor_el, setAnchorEl] = useState(null);
  
  // Boolean to determine if the dropdown is open
  const open = Boolean(anchor_el);

  const handleClick = (event) => {

    event.stopPropagation();  // Prevent event propagation

    setAnchorEl(event.currentTarget); // Set the current target as the anchor element

  };

  const handleClose = (event) => {

    event.stopPropagation(); // Prevent event propagation
    
    setAnchorEl(null); // Close the dropdown by clearing the anchor element

    if(onClose) {

      onClose(); // Call the custom onClose callback if provided
    }
  
  };


  return (

    <React.Fragment>
        
      <AnchorEl onClick={handleClick}/>  {/* Render the anchor element and attach the click handler */}

      <DropDown 

        open={open} 
        anchor_el={anchor_el} 
        anchor_orgin_vertical={anchor_orgin_vertical}
        handleClose={handleClose} 
        buttons={buttons} // Pass down the buttons, anchor, and close handler to the DropDown component

      />

    </React.Fragment>
  );
}

export default DropDownAnchor

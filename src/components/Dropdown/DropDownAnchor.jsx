import "./styles.css"
import { Icon } from "@mdi/react";
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DropDown from "./DropDown"
import classNames from "classnames"

export default ({buttons, onClose, AnchorEl, anchor_orgin_vertical}) => {

  const [anchor_el, setAnchorEl] = useState(null);
  const open = Boolean(anchor_el);

  const handleClick = (event) => {

    event.stopPropagation();

    setAnchorEl(event.currentTarget);

  };

  const handleClose = (event) => {

    event.stopPropagation();
    
    setAnchorEl(null);


    if(onClose) {

      onClose();
    }
  
  };



  return (

    <React.Fragment>
      
        
      <AnchorEl onClick={handleClick}/> 

      <DropDown 

        open={open} 
        anchor_el={anchor_el} 
        anchor_orgin_vertical={anchor_orgin_vertical}
        handleClose={handleClose} 
        buttons={buttons}

      />

    </React.Fragment>
  );
}



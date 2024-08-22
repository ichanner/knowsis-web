import "./styles.css"
import { Icon } from "@mdi/react";
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DropDown from "./DropDown"
import classNames from "classnames"

export default ({buttons, onClose, open_icon_path, open_icon_classname}) => {

  const [anchor_el, setAnchorEl] = useState(null);
  const open = Boolean(anchor_el);

  const handleClick = (event) => {

    event.stopPropagation();

    setAnchorEl(event.currentTarget);

  };

  const handleClose = (event) => {

    event.stopPropagation();
    
    if(onClose) {

      onClose();
    }
  
    setAnchorEl(null);
  };

  return (

    <React.Fragment>
    
      <Icon 

        onClick={handleClick} 
        path={open_icon_path} 
        className={open_icon_classname}

      /> 

      <DropDown 

        open={open} 
        anchor_el={anchor_el} 
        handleClose={handleClose} 
        buttons={buttons}

      />

    </React.Fragment>
  );
}



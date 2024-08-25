import "./styles.css"
import { Icon } from "@mdi/react";
import React, { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import classNames from "classnames"

const DropDown = ({buttons, handleClose, open, anchor_el, anchor_orgin_vertical}) => {

  return (

    <Menu 

      className='dropdown__menu'
      placement="right"
      anchorEl={anchor_el} // The element that anchors the dropdown menu
      open={open}  // Controls whether the dropdown is open or closed
      id="menu-list-grow"
      onClose={handleClose} // Function to handle closing the dropdown
      anchorOrigin={{vertical: anchor_orgin_vertical, horizontal: 'right'}} // Where the dropdown should originate from relative to the anchor element
      transformOrigin={{vertical: 'top', horizontal: 'right'}}  // Where the dropdown should transform from
    >

      { 

        buttons.map((button, index) => {

          // Handle the button click, triggering the callback and closing the dropdown
          const handleClick = useCallback((e) =>{

             button.callback()
                  
             handleClose(e)

          }, [button])

          // Apply conditional class names to the menu item
          const menu_item_class_names = classNames("dropdown__menu-item", { "dropdown__menu-item--serious": button.serious })

          return ( 

            <React.Fragment key={index}>

              {/* Add a divider if new_section is true */}
             
              { button.new_section && <div className='dropdown__divider'/> } 

              <MenuItem className={menu_item_class_names} onClick={handleClick}> 

                <div className='dropdown__item-label'> {button.label} </div>

                { button.icon_path && <Icon path={button.icon_path} className='dropdown__item-icon'/> }

              </MenuItem>

            </React.Fragment>

          )

        })
      }

    </Menu>

  );
}

export default DropDown;



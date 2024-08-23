import "./styles.css"
import { Icon } from "@mdi/react";
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material/styles';


// move to css file e
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: ' .4 .7rem',
  '&:hover': {
    backgroundColor: 'var(--gray-800)'
  },
}));

export default (props) => {
  
  const {buttons, handleClose, open, anchor_el, anchor_orgin_vertical} = props



  return (


    <Menu 

      id="menu-list-grow"
      className='dropdown-menu'
      placement="right"
      anchorEl={anchor_el}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: anchor_orgin_vertical, horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }} 
    >

      { 

        buttons.map((button, index) => (

          <React.Fragment key={index}>

           { button.new_section && <div className='divider'/> }

            <StyledMenuItem 

              className="dropdown-menu-item" 
            
              sx={button.serious ? {'& > *': {color: 'var(--red-500)'}} : {}} 
            
              onClick={ (e) => {

                button.callback()
                handleClose(e)

              }}
             
            >

              <div className='item-label'> {button.label} </div>

              { button.icon_path && <Icon path={button.icon_path} className='item-icon'/> }


            </StyledMenuItem>

          </React.Fragment>

        ))
      }

    </Menu>

   
  );
}



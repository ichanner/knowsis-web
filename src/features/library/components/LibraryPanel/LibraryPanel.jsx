import "./styles.css";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExpanded, selectListExpanded } from "../../stores/uiSlice.js";
import { Icon } from "@mdi/react";
import { mdiPlus, mdiArrowCollapseAll, mdiBookMultiple } from '@mdi/js';
import Collapse from '@mui/material/Collapse';
import LibraryList from "./LibraryList";
import SearchBox from "../../../../components/SearchBox/SearchBox";

const LibraryPanel = () => {

  const dispatch = useDispatch();
  const expanded = useSelector(selectListExpanded);

  return (
    
    <div>

      {/* Collapse component controls the horizontal expansion of the library panel */}
    
      <Collapse collapsedSize='90px' timeout={0} orientation="horizontal" in={expanded}>
        
        {/* Main container for the library panel */}
       
        <div className='library__container'>

          {/* Container for the header section of the panel */}
         
          <div className='library__panel-container'>

            {/* Header row containing the expand/collapse icon and label */}
          
            <div className='library__panel-header'>

              {/* Group of elements for the header interaction */}
             
              <div onClick={() => dispatch(setExpanded(!expanded))} className='library__panel-group'>
                
                {/* Icon for the library, toggles the expand/collapse */}
              
                <Icon className='library__panel-icon' path={mdiBookMultiple} />
                
                {/* Label for the library, only visible when expanded */}
              
                {expanded && <div className='library__panel-label'> Library </div>}
              
              </div>

              {/* Additional action buttons, only visible when expanded */}
              
              { expanded && 

                <div className='library__panel-group'>
                
                  <Icon className='library__panel-btn' path={mdiPlus} />
                  <Icon className='library__panel-btn' path={mdiArrowCollapseAll} />
                
                </div>
              }

            </div>

          </div>

          {/* Search box for filtering the library list, only visible when expanded */}

          { expanded && 

            <div className='library__search-container'>

              <SearchBox placeholder="Search Library" full_width={true} custom_theme='library__search-colors' />

            </div>
          }

          {/* The list of libraries, rendered with react-window for performance */}
         
          <LibraryList />
       
        </div>

      </Collapse>

    </div>

  );

};


export default LibraryPanel;

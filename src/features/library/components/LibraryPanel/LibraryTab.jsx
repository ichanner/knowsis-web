import "./styles.css";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { selectLibraryById } from "../../stores/librarySlice.js";
import { selectListExpanded } from "../../stores/uiSlice.js";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const LibraryTab = ({ library_id, is_focused }) => {

    const library = useSelector(selectLibraryById(library_id));
    const navigate = useNavigate();
    const expanded = useSelector(selectListExpanded); // Determine if the library list is expanded or collapsed

    // Dynamically generate the class names based on the UI state
    const tabClassname = classNames({ 
  
        'library__tab-container': expanded, 
        'library__tab-container--collapsed': !expanded,
        'library__tab-container--collapsed--selected': !expanded && is_focused,
        'library__tab-container--selected': is_focused
  
    });

    
    // Handle navigation on tab click
    const handleClick = useCallback(() => {
   
        navigate(`/${library_id}`);
   
    }, [navigate, library_id]);
    

    if(library == null){

        return null;
    }

    return ( 

        <div onClick={handleClick} className={tabClassname}>
      
            <img className='library__tab-cover' src={library.cover_url} alt={`${library.name} cover`} />
      
            {expanded && <div className='library__tab-name'>{library.name}</div>}
      
        </div> 
    );
};

export default LibraryTab;

import "./styles.css"

import React from "react";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBox = ({placeholder, full_width, color_scheme}) => {

    
    return (

        <React.Fragment>
            
            <Input
                
                placeholder={placeholder}
                className={`search-box-input ${color_scheme}`}
                fullWidth={full_width}
       
                startAdornment={
                
                    <InputAdornment position="start">
                
                        <Icon path={mdiMagnify} className="search-box-icon" />
                
                    </InputAdornment>
                
                }
            />

        </React.Fragment>

    );
}


export default SearchBox
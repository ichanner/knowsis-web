import "./styles.css"

import React from "react";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBox = ({placeholder, full_width=false, disable_underline=true, custom_theme}) => {

    return (

        <React.Fragment>
            
            <Input 

                placeholder={placeholder} 

                className={`search-box__input ${custom_theme}`}
               
                fullWidth={full_width}

                disableUnderline={disable_underline}

                startAdornment={
                
                    <InputAdornment position="start">
                
                        <Icon path={mdiMagnify} className="search-box__icon" />
                
                    </InputAdornment>
                }
            />

        </React.Fragment>

    );
}


export default SearchBox
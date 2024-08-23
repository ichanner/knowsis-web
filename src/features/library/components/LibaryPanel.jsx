import "./styles.css"

import React, { useEffect, useState, useCallback, useRef } from 'react'
import { mdiSortVariant, mdiArrowCollapseAll, mdiMagnify, mdiArrowLeft, mdiPlus, mdiBookMultiple } from '@mdi/js'
import { useSelector, useDispatch } from 'react-redux'
import { setExpanded, selectListExpanded } from "../uiSlice.js"
import { Icon } from "@mdi/react"
import Collapse from '@mui/material/Collapse'
import LibraryList from "./LibraryList"
import SearchBox from "../../../components/SearchBox/SearchBox"

export default () => {

  const dispatch = useDispatch()
  const expanded = useSelector(selectListExpanded)

  return (

      <div>

        <Collapse collapsedSize='90px' timeout={0} orientation="horizontal" in={expanded} >
       
          <div className='libary__container'>

            <div className='library-panel__container'>

              <div className='library-panel__header' >

                <div onClick={()=>dispatch(setExpanded(!expanded))} className='library-panel__group'>

                  <Icon className='library-panel__icon' path={mdiBookMultiple} />
          
                  { expanded &&  <div className='library-panel__label'> Library </div> }
              
                </div>


                { expanded && <div className='library-panel__group'>
                    
                    <Icon className='library-panel__btn'  path={mdiPlus} />

                     <Icon className='library-panel__btn' path={mdiArrowCollapseAll} />

                  </div>

                }

              </div>

            </div>


            { expanded &&  <div className='library-search-container'>

                  <SearchBox 

                     placeholder="Search Library" 
                     full_width={true}
                     color_scheme='library-search-colors' 

                  />


              </div>
            }

            <LibraryList/>
           
          </div>

        </Collapse>

      </div>

  );

};



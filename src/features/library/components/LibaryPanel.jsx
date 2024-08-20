import "./styles.css"

import React, { useEffect, useState, useCallback, useRef } from 'react'
import { mdiMagnify, mdiPlus, mdiBookMultiple } from '@mdi/js'
import { Icon } from "@mdi/react"
import Collapse from '@mui/material/Collapse'
import LibraryList from "./LibraryList"

export default () => {

  const [ expanded, setExpanded ] = useState(true)

  return (

      <div>

        <Collapse orientation="horizontal" in={expanded} >
       
          <div className='libary__container'>

            <div className='library-panel__container'>

              <div className='library-panel__header' >

                <div onClick={()=>setExpanded(!expanded)} className='library-panel__group'>

                  <Icon onClick={()=>setExpanded(!expanded)} className='library-panel__icon' path={mdiBookMultiple} />
          
                  <div className='library-panel__label'> Library </div>
              
                </div>

              </div>

              <div className='library-panel__group'>

                <Icon className='library-panel__btn' path={mdiMagnify} />
                
                <Icon className='library-panel__btn' path={mdiPlus} />

              </div>

            </div>

            <LibraryList/>


          </div>


        </Collapse>

      </div>

  );

};



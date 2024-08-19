import React from "react"
import { FixedSizeList as List } from "react-window"
import { useParams } from "react-router-dom"




const LibraryList = () => {

	return (

	    <div>

	      { chats.length > 0 ?

	        <List

	          ref={listRef}
	          height={chats.length*TAB_HEIGHT}
	          itemCount={chats.length + 1 }
	          itemSize={()=>TAB_HEIGHT}  
	          onScroll={handleScroll}
	        >

	          { Row }

	        </List> : null

	      }

	    </div>

  	);

}

export default LibraryList






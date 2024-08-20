import "./styles.css"

import React from 'react';
import CoverList from "../../features/covers/componets/CoversGrid"
import LibraryPanel from "../../features/library/components/LibaryPanel"

export default(() => {

  	return (
		    
		<div className="home-container">

			<LibraryPanel/>

			<CoverList/>

		</div>
  	);

});


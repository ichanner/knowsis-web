import "./styles.css"

import React from 'react'

const Avatar = ({user_id, size})=>{

	//temporary placeholder
	const url = 'https://media.threatpost.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg'

	return(

		<img className='avatar' alt="avatar" src={url} style={{width: `${size}rem`, height: `${size}rem`}}/>
	)
}

export default Avatar;
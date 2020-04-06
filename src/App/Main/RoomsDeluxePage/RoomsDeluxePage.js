import React from 'react';

import {Link} from 'react-router-dom'
import RoomsListItem from '../Rooms/RoomsListItem'
import RoomsData from '../Rooms/RoomsData'



class RoomsDeluxePage extends React.Component {
	render () {
		return (
			<div className="row">
			<div className="col-md-12">
					<Link to='/'><h1>DELUXE ROOMS</h1></Link>
			</div>
		  
		<div className="row"> 
		   {
			  RoomsData.filter(item => item.type === 'roomdeluxe').map(({
				   id,
				   name,
				   description,
				   image,
				   type
			   })=>{
				   return(
				   <div className="col-md-4" key={id}>
					   <RoomsListItem 
							name={name}
							description={description}
							image={image}
							id={id}
							type={type}
						/>
				   </div>
			  )
			})
		}
		</div>
		</div>
		)
	}
}

export default RoomsDeluxePage;
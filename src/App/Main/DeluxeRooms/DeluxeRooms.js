import React from 'react'
import DeluxeRoomsItem from './DeluxeRoomsItem'
import DeluxeRoomsData from './DeluxeRoomsData'




class DeluxeRooms extends React.Component {
	render () {
		return (
			<div className="flex">
				<div className="sideitem">
               {
                  DeluxeRoomsData.filter(item => item.id < 3).map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>{
					return (
                       <div  key={id}>
                           <DeluxeRoomsItem 
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
				<div className="mainitem">
					<img src="images/room(3).png" alt=""/>
				</div>

				<div className="sideitem">
               {
                  DeluxeRoomsData.filter(item =>  item.id > 3).map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>{
					return (
                       <div  key={id}>
                           <DeluxeRoomsItem 
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

export default DeluxeRooms 
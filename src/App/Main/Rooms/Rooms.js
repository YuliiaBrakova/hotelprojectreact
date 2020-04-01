import React from 'react'
import RoomsListItem from './RoomsListItem'
import RoomsData from './RoomsData'



const Rooms = ({
    
}) => {
    return (
        <div>
            <div className="row">
               {
                  RoomsData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>(
                       <div className="col-md-4" key={id}>
                           <RoomsListItem 
                                name={name}
                                description={description}
                                image={image}
                                id={id}
                                type={type}
                            />
                       </div>
                   ))
               }
            </div>
        </div>
    )
}







export default Rooms 
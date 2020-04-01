import React from 'react'
import ActivitiesListItem from './ActivitiesListItem'
import ActivitiesData from './ActivitiesData'



const Activities = ({
    
}) => {
    return (
        <div>
            <div className="row">
               {
                  ActivitiesData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>(
                       <div className="col-md-4" key={id}>
                           <ActivitiesListItem 
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







export default Activities
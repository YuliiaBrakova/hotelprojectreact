import React from 'react'
import ActivitiesListItem from './ActivitiesListItem'
import ActivitiesData from './ActivitiesData'



const Activities = () => {
    return (
        
            <div className="flex">
               {
                  ActivitiesData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>(
                       <div className="flex_activities" key={id}>
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
        
    )
}







export default Activities
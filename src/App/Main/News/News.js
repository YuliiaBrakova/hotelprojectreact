import React from 'react'
import NewsItem from './NewsItem'
import NewsData from './NewsData'



const News = ({
    
}) => {
    return (
        
            <div className="row">
               {
                  NewsData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>(
                       <div className="col-md-4" key={id}>
                           <NewsItem 
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







export default News 
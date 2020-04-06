import React from 'react'
import NewsItem from './NewsItem'
import NewsData from './NewsData'




class News extends React.Component {
	render () {
    return (
            <div className="row">
                <div className="col-md-12">
                    <a href=""><h1>News From Us</h1></a>
                </div>

            <div className="row">
               {
                  NewsData.map(({
                       id,
                       name,
                       description,
                       image,
                       type
                   })=>{
                    return(
                       <div className="col-md-4" key={id}>
                           <NewsItem 
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







export default News 
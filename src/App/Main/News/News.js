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
                  NewsData.filter(item => item.id < 4).map(({
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
                <div className="main-buttons">
                    <div className="main-button"><a href="/">&#60;</a></div>
                    <div className="main-button button-active"><a href="/">1</a></div>
                    <div className="main-button"><a href="/">2</a></div>
                    <div className="main-button"><a href="/">3</a></div>
                    <div className="main-button"><a href="/">...</a></div>
                    <div className="main-button"><a href="/">8</a></div>
                    <div className="main-button"><a href="/">&#62;</a></div>
                </div>
        </div>
    )
}
}







export default News 
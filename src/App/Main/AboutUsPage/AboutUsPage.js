import React from 'react';

import NewsItem from './../News/NewsItem'
import NewsData from './../News/NewsData'



class AboutUsPage extends React.Component {
	render () {
		return (
			<div className="row">
                <div className="col-md-12">
                    <a href=""><h1>About Us</h1></a>
                </div>

            <div className="row">
               {
                  NewsData.filter(item => item.type === 'newsab').map(({
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

export default AboutUsPage;
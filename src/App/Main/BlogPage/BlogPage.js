import React from 'react';

import BlogPageData from './BlogPageData'
import BlogPageItem from './BlogPageItem'
import './BlogPage.css'


class BlogPage extends React.Component {
	render () {
		return (
        
            
                <div className="col-md-12">
                    <a href=""><h1>Blog</h1></a>
               

			<div className='blog-screen'>
				{
					BlogPageData.map(({
                        id,
                        name,
                        description,
                        image,
                        type
					})=>{
						return (
							<div key={id} className='blog-screen_b col-md-4'>
								<BlogPageItem 
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

export default BlogPage;
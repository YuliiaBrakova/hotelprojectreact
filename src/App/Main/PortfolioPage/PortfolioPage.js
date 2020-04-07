import React from 'react';

import PortfolioPageData from './PortfolioPageData'
import PortfolioPageItem from './PortfolioPageItem'
import './PortfolioPage.css'


class PortfolioPage extends React.Component {
	render () {
		return (
        
            
            <div className="col-md-12">
                    <a href=""><h1>Portfolio</h1></a>
               

			<div className='blog-screen'>
				{
					PortfolioPageData.filter(item => item.id < 6).map(({
                        id,
                        name,
                        description,
                        image,
                        type
					})=>{
						return (
							<div key={id} className='blog-screen_b col-md-4'>
								<PortfolioPageItem 
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
			<div className='blog-screen'>
				{
					PortfolioPageData.filter(item => item.id > 5 && item.id < 11).map(({
                        id,
                        name,
                        description,
                        image,
                        type
					})=>{
						return (
							<div key={id} className='blog-screen_b col-md-4'>
								<PortfolioPageItem 
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
			<div className='blog-screen'>
				{
					PortfolioPageData.filter(item => item.id > 10).map(({
                        id,
                        name,
                        description,
                        image,
                        type
					})=>{
						return (
							<div key={id} className='blog-screen_b col-md-4'>
								<PortfolioPageItem 
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

export default PortfolioPage;
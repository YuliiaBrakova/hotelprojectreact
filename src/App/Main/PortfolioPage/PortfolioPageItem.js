import React from 'react';
import PropTypes from 'prop-types'

import './PortfolioPage.css'

class PortfolioPageItem extends React.Component {
	render () {
        const {
            name,
            image,
            description,
        } = this.props;

		return (
			<div className='block'>
                <img src={image} alt={description} title={name} />
                <div className="shadow"></div>    
            </div>
            
		)
	}
}

PortfolioPageItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string
}


export default PortfolioPageItem;
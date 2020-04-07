import React from 'react';
import PropTypes from 'prop-types'

import './BlogPage.css'

class BlogPageItem extends React.Component {
	render () {
        const {
            name,
            image,
            type,
            description,
        } = this.props;

		return (
			<div className='block'>
                <img src={image} alt={description} title={name} />
                <div className="info">
                    <div className="category">{type}</div>
                    <div className="author-date">{description}</div>
                    <div className="title">{name}</div>
                    <div className="description">{description}</div>
                </div>
                <div className="shadow"></div>
            </div>
		)
	}
}

BlogPageItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string
}


export default BlogPageItem;
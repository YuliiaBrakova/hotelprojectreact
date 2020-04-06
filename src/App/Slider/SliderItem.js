import React, {Component} from 'react'
import PropTypes from 'prop-types'


class SliderItem extends Component{

    render (){
        const{
            name,
            description,
            image,
        } = this.props;

        return (
            <div className="slick">
                <div><img src={image} alt={description} title={name} /></div>  
	        </div>
        )
    }

}


SliderItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string
}


export default SliderItem
import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ActivitiesListItem extends Component{

    render (){
        const{
            
            name,
            description,

            image,
          
        } = this.props;

        return (
            
                <div className="item_activities" >
                    <img src={image} alt={description} title={name} />
                    <a href=""><h3>{name}</h3></a>
                    <p>{description}</p>
                </div>
            
        )
    }

}


ActivitiesListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string, 
    color:PropTypes.string
}


export default ActivitiesListItem
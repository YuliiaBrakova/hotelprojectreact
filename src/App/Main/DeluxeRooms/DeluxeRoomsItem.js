import React, {Component} from 'react'
import PropTypes from 'prop-types'



class DeluxeRoomsItem extends Component{

    render (){
        const{
            
            name,
            description,
            image,
            type,
        } = this.props;

        return (
           
                <div className="item">
                <img src={image} alt={type} title={description}/>
                <a href=""><h4>{name}</h4></a>
                <p className="text_room">{description}</p> 
               </div> 
                
              
          
            
           

        )
    }

}


DeluxeRoomsItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string, 
    color:PropTypes.string
}

 
export default DeluxeRoomsItem
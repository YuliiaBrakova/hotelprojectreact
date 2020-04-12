import React, {Component} from 'react'
import PropTypes from 'prop-types'


class RoomsListItem extends Component{
    state = {
        liked: false
      };

      handleClick= () => {
        this.setState({
          liked: !this.state.liked
        });
      }

  

    render (){
        const label = this.state.liked ? <span>&#9829;</span> : <span>&#9825;</span>
        const{
            
            name,
            description,

            image,
           
        } = this.props;

        return (
            <div className="hotel_list">
                    <div className="hotel_list_img">
                         <img src={image} alt={description} title={name} />
                          <button class="heart" onClick={this.handleClick} >
                          {label}
                          </button>
                    </div>
                <div className="hotel_list_description">
                    <a href=""><h2>{name}</h2></a>
                    <p>{description}</p>
                </div>
            </div>
        )
    }

}


RoomsListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string
}


export default RoomsListItem
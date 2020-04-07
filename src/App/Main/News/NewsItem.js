import React, {Component} from 'react'
import PropTypes from 'prop-types'


class NewsItem extends Component{

    render (){
        const{
            
            name,
            description,

            image,
          
        } = this.props;

        return (
            <div className="news_list">
                    <div className="news_list_img ">
                         <img className="displayed" src={image} alt={description} title={name} />
                    </div>
                <div className="news_list_description">
                    <a href=""><h2>{name}</h2></a>
                    <p>{description}</p>
                </div>
            </div>
        )
    }

}


NewsItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    image:PropTypes.string,
    color:PropTypes.string
}


export default NewsItem
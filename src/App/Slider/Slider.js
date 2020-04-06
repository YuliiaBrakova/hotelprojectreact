import React, {Component} from 'react'
import Slider from "react-slick";

import "./slick/slick.css";
import "./slick/slick-theme.css";
import "./slider.css"

import SliderData from './SliderData'
import SliderItem from './SliderItem'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        autoplay:true,
        speed:2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
       
    };
    return (
      
        <Slider {...settings}>
          {
             SliderData.map(({
              id,
              name,
              description,
              image,
              type
          })=>(
              <div className="row" key={id}>
                  <SliderItem 
                       name={name}
                       description={description}
                       image={image}
                       id={id}
                       type={type}
                   />
              </div>
          ))
          }
        </Slider>
      
    );
  }
}
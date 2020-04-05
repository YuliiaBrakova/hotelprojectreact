import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../Slider/slider.css"

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
      <div className="row">
        <Slider {...settings}>
            <div className="slick">
                <div><img src="images/bg_1.jpg" alt=""/></div>
                <div><img src="images/bg_2.jpg" alt=""/></div>
                <div><img src="images/bg_3.jpg" alt=""/></div>
                <div><img src="images/bg_2.jpg" alt=""/></div>
	        </div>
        </Slider>
      </div>
    );
  }
}
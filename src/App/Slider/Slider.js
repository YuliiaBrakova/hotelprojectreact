import React, {Component} from 'react'

import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed:2300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
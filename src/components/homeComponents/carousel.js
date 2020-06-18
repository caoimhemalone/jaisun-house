import React, { Component } from 'react';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import placeholder images
import ph_1 from "../../assets/images/placeholder-1.jpg";
import ph_2 from "../../assets/images/placeholder-2.jpg";
import ph_3 from "../../assets/images/placeholder-3.jpg";
import ph_4 from "../../assets/images/placeholder-4.jpg";
import ph_5 from "../../assets/images/placeholder-5.jpg";

//https://react-slick.neostack.com/docs/example/auto-play

class HeaderCarousel extends React.Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };
    return (
      <Slider {...settings} className="header-carousel">
        <div>
          <img src={ph_1} />
        </div>
        <div>
            <img src={ph_2} />
        </div>
        <div>
            <img src={ph_3} />
        </div>
        <div>
            <img src={ph_4} />
        </div>
        <div>
            <img src={ph_5} />
        </div>
      </Slider>
    );
  }
}

export default HeaderCarousel
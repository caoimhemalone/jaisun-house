import React from 'react';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import placeholder images
import ph_1 from "../../assets/images/stock/placeholder-1.jpg";
import ph_2 from "../../assets/images/stock/placeholder-2.jpg";
import ph_3 from "../../assets/images/stock/placeholder-3.jpg";
import ph_4 from "../../assets/images/stock/placeholder-4.jpg";
import ph_5 from "../../assets/images/stock/placeholder-5.jpg";
import ph_1_mobile from "../../assets/images/stock/placeholder-1-mobile.jpg";
import ph_2_mobile from "../../assets/images/stock/placeholder-2-mobile.jpg";
import ph_3_mobile from "../../assets/images/stock/placeholder-3-mobile.jpg";
import ph_4_mobile from "../../assets/images/stock/placeholder-4-mobile.jpg";
import ph_5_mobile from "../../assets/images/stock/placeholder-5-mobile.jpg";

//https://react-slick.neostack.com/docs/example/auto-play

class HeaderCarousel extends React.Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 1,
        cssEase: "linear"
    };
    return (
      <Slider {...settings} className="header-carousel">
        <div>
          <img className="slider-img-desktop" src={ph_1} alt="carousel"/>
          <img className="slider-img-mobile" src={ph_1_mobile} alt="carousel" />
        </div>
        <div>
            <img className="slider-img-desktop" src={ph_2} alt="carousel" />
            <img className="slider-img-mobile" src={ph_2_mobile} alt="carousel" />
        </div>
        <div>
            <img className="slider-img-desktop" src={ph_3} alt="carousel" />
            <img className="slider-img-mobile" src={ph_3_mobile} alt="carousel" />
        </div>
        <div>
            <img className="slider-img-desktop" src={ph_4} alt="carousel" />
            <img className="slider-img-mobile" src={ph_4_mobile} alt="carousel" />
        </div>
        <div>
            <img className="slider-img-desktop" src={ph_5} alt="carousel" />
            <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" />
        </div>
      </Slider>
    );
  }
}

export default HeaderCarousel
import React from 'react';
import Slider from "react-slick";
import axios from 'axios';


//https://react-slick.neostack.com/docs/example/auto-play


class HeaderCarousel extends React.Component {

render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000
    };

    return (
      <Slider {...settings} className="header-carousel">
        <div>
          <img src="/header_images/carousel/car_1.png" alt="carousel" />
          {/* <img src={this.state.car_img_1} alt="carousel"/> */}
          {/* <img className="slider-img-mobile" src={ph_1_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_2.png" alt="carousel" />
          {/* <img src={this.state.car_img_2} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_2_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_3.png" alt="carousel" />
          {/* <img src={this.state.car_img_3} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_3_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_4.png" alt="carousel" />
          {/* <img src={this.state.car_img_4} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_4_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_5.png" alt="carousel" />
          {/* <img src={this.state.car_img_5} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_6.png" alt="carousel" />
            {/* <img src={this.state.car_img_6} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_7.png" alt="carousel" />
            {/* <img src={this.state.car_img_6} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_8.png" alt="carousel" />
            {/* <img src={this.state.car_img_6} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
      </Slider>
    );
  }
}

export default HeaderCarousel
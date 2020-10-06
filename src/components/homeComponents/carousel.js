import React from 'react';
import Slider from "react-slick";
import axios from 'axios';

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
  state = {
    ttable: {},
    isLoaded: false
 }

 componentDidMount() {
  const fetchData = async () => {
    const response = await fetch(
      'http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/'
    );
    const data = await response.json();
    //console.log(data);
    //this.setState({ data });
     this.setState({
        carousel: data[0],
        car_img_1: data[0].acf.carousel_img_1,
        car_img_2: data[0].acf.carousel_img_2,
        car_img_3: data[0].acf.carousel_img_3,
        car_img_4: data[0].acf.carousel_img_4,
        car_img_5: data[0].acf.carousel_img_5,
        car_img_6: data[0].acf.carousel_img_6,
        isLoaded: true
      });
  };
  
  fetchData();
}

componentDidUpdate(previousProps, previousState) {
  if (previousState.query !== this.state.query) {
    const fetchData = async () => {
      const response = await fetch(
        'http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/'
      );
      const data = await response.json();
      //this.setState({ data });
      //console.log(data);
      this.setState({
        carousel: data[0],
        car_img_1: data[0].acf.carousel_img_1,
        car_img_2: data[0].acf.carousel_img_2,
        car_img_3: data[0].acf.carousel_img_3,
        car_img_4: data[0].acf.carousel_img_4,
        car_img_5: data[0].acf.carousel_img_5,
        car_img_6: data[0].acf.carousel_img_6,
        isLoaded: true
      });
    };

    fetchData();
  }
}

//  componentDidMount(){
//     axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
//     .then(res => {
//       console.log(res.data[0]);
//       this.setState({
//        carousel: res.data[0],
//        car_img_1: res.data[0].acf.carousel_img_1,
//        car_img_2: res.data[0].acf.carousel_img_2,
//        car_img_3: res.data[0].acf.carousel_img_3,
//        car_img_4: res.data[0].acf.carousel_img_4,
//        car_img_5: res.data[0].acf.carousel_img_5,
//        car_img_6: res.data[0].acf.carousel_img_6,
//        isLoaded: true
//       })
//     })
//     .catch(err => console.log(err));
//  }

 constructor(props) {    
  super(props)
  this.state = {
    condition: false
  }
  this.handleClick = this.handleClick.bind(this)
}
handleClick() {
  this.setState({
    condition: !this.state.condition
  })
}

render() {
    const {carousel, isLoaded } = this.state;

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


    if(isLoaded) {
      return (
        <Slider {...settings} className="header-carousel">
          <div>
            <img src={this.state.car_img_1} alt="carousel"/>
            {/* <img className="slider-img-mobile" src={ph_1_mobile} alt="carousel" /> */}
          </div>
          <div>
            <img src={this.state.car_img_2} alt="carousel"/>
              {/* <img className="slider-img-mobile" src={ph_2_mobile} alt="carousel" /> */}
          </div>
          <div>
            <img src={this.state.car_img_3} alt="carousel"/>
              {/* <img className="slider-img-mobile" src={ph_3_mobile} alt="carousel" /> */}
          </div>
          <div>
            <img src={this.state.car_img_4} alt="carousel"/>
              {/* <img className="slider-img-mobile" src={ph_4_mobile} alt="carousel" /> */}
          </div>
          <div>
            <img src={this.state.car_img_5} alt="carousel"/>
              {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
          </div>
          <div>
              <img src={this.state.car_img_6} alt="carousel"/>
              {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
          </div>
        </Slider>
      );
    } return null;
  }
}

export default HeaderCarousel
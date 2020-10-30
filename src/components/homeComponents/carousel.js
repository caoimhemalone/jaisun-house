import React from 'react';
import Slider from "react-slick";
import axios from 'axios';


//https://react-slick.neostack.com/docs/example/auto-play


class HeaderCarousel extends React.Component {
//   state = {
//     ttable: {},
//     isLoaded: false
//  }

//  componentDidMount() {
//   const fetchData = async () => {
//     const response = await fetch(
//       'http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/'
//     );
//     const data = await response.json();
//     //console.log(data);
//     //this.setState({ data });
//      this.setState({
//         carousel: data[0],
//         car_img_1: data[0].acf.carousel_img_1,
//         car_img_2: data[0].acf.carousel_img_2,
//         car_img_3: data[0].acf.carousel_img_3,
//         car_img_4: data[0].acf.carousel_img_4,
//         car_img_5: data[0].acf.carousel_img_5,
//         car_img_6: data[0].acf.carousel_img_6,
//         isLoaded: true
//       });
//   };
  
//   fetchData();
// }

// componentDidUpdate(previousProps, previousState) {
//   if (previousState.query !== this.state.query) {
//     const fetchData = async () => {
//       const response = await fetch(
//         'http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/'
//       );
//       const data = await response.json();
//       //this.setState({ data });
//       //console.log(data);
//       this.setState({
//         carousel: data[0],
//         car_img_1: data[0].acf.carousel_img_1,
//         car_img_2: data[0].acf.carousel_img_2,
//         car_img_3: data[0].acf.carousel_img_3,
//         car_img_4: data[0].acf.carousel_img_4,
//         car_img_5: data[0].acf.carousel_img_5,
//         car_img_6: data[0].acf.carousel_img_6,
//         isLoaded: true
//       });
//     };

//     fetchData();
//   }
// }

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

//  constructor(props) {    
//   super(props)
//   this.state = {
//     condition: false
//   }
//   this.handleClick = this.handleClick.bind(this)
// }
// handleClick() {
//   this.setState({
//     condition: !this.state.condition
//   })
// }

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
          <img src="/header_images/carousel/car_1.jpg" alt="carousel" />
          {/* <img src={this.state.car_img_1} alt="carousel"/> */}
          {/* <img className="slider-img-mobile" src={ph_1_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_2.jpg" alt="carousel" />
          {/* <img src={this.state.car_img_2} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_2_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_3.jpg" alt="carousel" />
          {/* <img src={this.state.car_img_3} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_3_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_4.jpg" alt="carousel" />
          {/* <img src={this.state.car_img_4} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_4_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_5.jpg" alt="carousel" />
          {/* <img src={this.state.car_img_5} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
        <div>
          <img src="/header_images/carousel/car_6.jpg" alt="carousel" />
            {/* <img src={this.state.car_img_6} alt="carousel"/> */}
            {/* <img className="slider-img-mobile" src={ph_5_mobile} alt="carousel" /> */}
        </div>
      </Slider>
    );
  }
}

export default HeaderCarousel
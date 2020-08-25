import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Image from 'react-image-resizer';


class BrandCarousel extends Component {

  // componentDidMount() {
  //     this.state = {
  //       image1: this.props.img1.sizes.large || null,
  //       image2: this.props.img2.sizes.large || null,
  //       image3: this.props.img3.sizes.large || null,
  //       image4: this.props.img4.sizes.large || null,
  //       image5: this.props.img5.sizes.large || null,
  //       image6: this.props.img6.sizes.large || null,
  //       image7: this.props.img7.sizes.large || null,
  //       image8: this.props.img8.sizes.large || null,
  //       image9: this.props.img9.sizes.large || null,
  //     };
  // }
  render() {
    let image1 = this.props.img1.sizes.large !== 'undefined' ? this.props.img1.sizes.large : null;
    let image2 = this.props.img2.sizes.large !== 'undefined' ? this.props.img2.sizes.large : null;
    let image3 = this.props.img3.sizes.large !== 'undefined' ? this.props.img3.sizes.large : null;
    let image4 = this.props.img4.sizes.large !== 'undefined' ? this.props.img4.sizes.large : null;
    let image5 = this.props.img5.sizes.large !== 'undefined' ? this.props.img5.sizes.large : null;
    let image6 = this.props.img6.sizes.large !== 'undefined' ? this.props.img6.sizes.large : null;
    let image7 = this.props.img7.sizes.large !== 'undefined' ? this.props.img7.sizes.large : null;
    let image8 = this.props.img8.sizes.large !== 'undefined' ? this.props.img8.sizes.large : null;
    let image9 = this.props.img9.sizes.large !== 'undefined' ? this.props.img9.sizes.large : null;
    return(
       <div className="brand-car-container">
          <Row>
            {image1 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image1} alt=""/>
                </Col>
                : <span></span>
            }

            {image2 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image2} alt=""/>
                </Col>
                : <span></span>
            }

            {image3 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image3} alt=""/>
                </Col>
                : <span></span>
            }

            {image4 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image4} alt=""/>
                </Col>
                : <span></span>
            }

            {image5 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image5 || ""} onError="this.onerror=null;"  alt=""/>
                </Col>
                : <span></span>
            }

            {image6 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image6} onError="this.onerror=null;"  alt=""/>
                </Col>
                : <span></span>
            }

            {image7 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image7} onError="this.onerror=null;"  alt=""/>
                </Col>
                : <span></span>
            }

            {image8 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image8} onError="this.onerror=null;"  alt=""/>
                </Col>
                : <span></span>
            }

            {image9 !== null ?
                 <Col xs={6} md={4} className="brand-car-item">
                 <img src={image9} onError="this.onerror=null;" alt=""/>
                </Col>
                : <span></span>
            }
          </Row>
       </div>
    );
  }
}

export default BrandCarousel;

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import ReactCardCarousel from "react-card-carousel";

// class BrandCarousel extends Component {
//   render() {
//     console.log(this.props);

//     return (
//       <div className="brand-car-container">
//         <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
//           <div className="brand-car-item">
//             <img src={this.props.img1} alt=""/>
//           </div>
//           <div className="brand-car-item">
//             <img src={this.props.img2} alt=""/>
//           </div>
//           <div className="brand-car-item">
//             <img src={this.props.img3} alt=""/>
//           </div>
//           <div className="brand-car-item">
//             <img src={this.props.img4} alt=""/>
//           </div>
//           <div className="brand-car-item">
//             <img src={this.props.img5} alt=""/>
//           </div>
//         </ReactCardCarousel>
//       </div>
//     );
//   }
// }

// export default BrandCarousel;

import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'
import axios from 'axios';
import PropTypes from 'prop-types';

//components
import Header from '../../components/mainComponents/headerSection';

//images
import guess2 from '../../assets/images/brands/photoshoots/guess_2.jpg';
import guess3 from '../../assets/images/brands/photoshoots/guess_3.jpg';
import guess4 from '../../assets/images/brands/photoshoots/guess_4.jpg';
import guess5 from '../../assets/images/brands/photoshoots/guess_5.jpg';
import guess6 from '../../assets/images/brands/photoshoots/guess_6.jpg';
import guess7 from '../../assets/images/brands/photoshoots/guess_7.jpeg';
import guess8 from '../../assets/images/brands/photoshoots/guess_8.jpg';

export class BrandItems extends Component {
   state = {
       bio: '',
       isLoaded: false
   }
   static propTypes = {
       brand: PropTypes.object.isRequired
   }
   componentDidMount () {
       const {bio} = this.props.brand;
       const getBio = axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand');
      
       Promise.all([getBio]).then(res => {
           console.log(res);
           this.setState({
               bio: res[1].data.bio,
               isLoaded: true
           });
       });
    }
 
   render() {
       const { title } = this.props.brand;
       const { bio, isLoaded } = this.state;
       return (
           <div>
                <Header heading={title.rendered}/>
                 <Grid fluid className="ind-brands-container px-0">
                    <Row className="ind-brands__details">
                        <Col xs={12} md={12} className="ind-brands__details__container">
                            <a href="/brands">
                                <Link to="/brands">Back to Brands</Link>
                            </a>
                            <span className="d-flex justify-content-center ind-brands__text">
                                {bio}
                            </span>
                        </Col>
                    </Row>
                    <Row className="ind-brands__tiles">
                        <div className="ind-brands__tiles__item item-1 big">
                            {/* <img src={guess2} alt="Placeholder"/> */}
                            <Image src={guess2} fluid alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-2 vertical">
                            <Image src={guess3} fluid alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-3 horizontal">
                            <Image fluid src={guess8} alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-4 vertical-long">
                            <Image fluid src={guess4} alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-5 vertical">
                            <Image fluid src={guess5} alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-6 horizontal">
                            <Image fluid src={guess6} alt="Placeholder"/>
                        </div>
                        <div className="ind-brands__tiles__item item-7 small">
                            <Image fluid src={guess7} alt="Placeholder"/>
                        </div>
                    </Row>
                </Grid>   
           </div>
       )
   }
}
export default BrandItems
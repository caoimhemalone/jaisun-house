import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";
import Image from 'react-bootstrap/Image'

//components
import Header from '../components/mainComponents/headerSection';

//images
import guess1 from '../assets/images/brands/photoshoots/guess_1.jpeg';
import guess2 from '../assets/images/brands/photoshoots/guess_2.jpg';
import guess3 from '../assets/images/brands/photoshoots/guess_3.jpg';
import guess4 from '../assets/images/brands/photoshoots/guess_4.jpg';
import guess5 from '../assets/images/brands/photoshoots/guess_5.jpg';
import guess6 from '../assets/images/brands/photoshoots/guess_6.jpg';
import guess7 from '../assets/images/brands/photoshoots/guess_7.jpeg';
import guess8 from '../assets/images/brands/photoshoots/guess_8.jpg';

import ph_square from '../assets/images/placeholder-square.jpg';


class IndBrand extends Component {
  header = "Individual Brand Name";
  render() {
    return (
      <div className="ind-brands" style={{backgroundImage: 'url(' + guess1 + ')'}}>
        <div className="overlay">
            <Header heading={this.header}/>
            <Grid fluid className="ind-brands-container px-0">
                <Row className="ind-brands__details">
                    <Col xs={12} md={12} className="ind-brands__details__container">
                        <a href="/brands">
                            <Link to="/brands">Back to Brands</Link>
                        </a>
                        <span className="d-flex justify-content-center ind-brands__text">GUESS was established in 1981 by the Marciano brothers, who left the south of France in pursuit of the American dream. Inspired by a European influence, the Marcianos redefined denim. One of their initial designs was a stonewashed, slim-fitting jean, the 3-zip Marilyn. Bloomingdale's was the first department store to welcome the brand by ordering two dozen pairs of jeans. They disappeared from the shelves in just hours. This was the beginning of a long success story. <br/> <br/>Today GUESS has grown into a global lifestyle brand, found in more than 100 countries worldwide. The company operates approxitmately 950 retail stores in the Americas, Europe and Asia, with over 700 additional retail stores operated via the company distributors and licensees.</span>
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
      </div>
    );  
  }
}

export default IndBrand;
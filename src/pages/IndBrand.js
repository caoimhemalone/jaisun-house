import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";


//components
import Header from '../components/mainComponents/headerSection';

//images
import gucci from '../assets/images/brands/gucci.jpg';
import ph_square from '../assets/images/placeholder-square.jpg';


class IndBrand extends Component {
  header = "Individual Brand Name";
  render() {
    return (
      <div className="ind-brands" style={{backgroundImage: 'url(' + gucci + ')'}}>
        <div className="overlay">
            <Header heading={this.header}/>
            <Grid fluid className="ind-brands-container px-0">
                <Row className="ind-brands__details">
                    <Col xs={12} md={12} className="ind-brands__details__container">
                        <a href="/brands">
                            <Link to="/brands">Back to Brands</Link>
                        </a>
                        <span className="d-flex justify-content-center ind-brands__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </Col>
                </Row>
                <Row className="ind-brands__tiles">
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={4} className="ind-brands__tiles__item">
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                </Row>
            </Grid>
        </div>
      </div>
    );  
  }
}

export default IndBrand;
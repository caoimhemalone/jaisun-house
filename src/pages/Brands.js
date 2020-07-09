import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';
import guess from '../assets/images/brands/guess_brand.png'
import mcgregor from '../assets/images/brands/mcgregor_brand.png'
import fantasy_sandals from '../assets/images/brands/fantasy_sandals_brand.png'
import gant from '../assets/images/brands/gant_brand.png'
import happy_socks from '../assets/images/brands/happy_socks_brand.png'
import joop from '../assets/images/brands/joop_brand.png'
import kendall_and_kylie from '../assets/images/brands/kendall_and_kylie_brand.png'
import nakd from '../assets/images/brands/nakd_brand.png'
import tiffosi from '../assets/images/brands/tiffosi_brand.png'
import vanessa_wu from '../assets/images/brands/vanessa_wu_brand.png'



class Brands extends Component {
  header = "Brands";
  render() {
    return (
      <div className="brands">
        <Header heading={this.header}/>
          <Grid fluid className="brands-container px-0">
            <Row className="brands__tiles">
              <Col xs={6} md={3} className="brands__tiles-item">
                <a href="/individual-brand">
                  <Link to="/individual-brand">
                    <img src={guess} alt="Placeholder Image"/>
                    <span className="d-flex justify-content-center">
                      Guess
                    </span>
                  </Link>
                </a>
              </Col>
             
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={gant} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Gant</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={mcgregor} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">McGregor</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={joop} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Joop</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={nakd} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">NAKD</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={kendall_and_kylie} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Kendall and Kylie</span>
              </Col>

              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={happy_socks} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Happy Socks</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={fantasy_sandals} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Fantasy Sandals</span>
              </Col>
              
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={tiffosi} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Tiffosi</span>
              </Col>

              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={vanessa_wu} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Vanessa Wu</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={3} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
            </Row>
          </Grid>
      </div>
    );  
  }
}

export default Brands;
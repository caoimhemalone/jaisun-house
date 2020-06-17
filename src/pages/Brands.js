import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';



class Brands extends Component {
  header = "Brands";
  render() {
    return (
      <div className="brands">
        <Header heading={this.header}/>
          <Grid fluid className="brands-container px-0">
            <Row className="brands__tiles">
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">
                  <a href="/individual-brand"><Link to="/individual-brand">Brand</Link></a>
                </span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>

              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>

              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>

              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
                <img src={ph_square} alt="Placeholder Image"/>
                <span className="d-flex justify-content-center">Brand Name</span>
              </Col>
              <Col xs={6} md={4} className="brands__tiles-item">
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
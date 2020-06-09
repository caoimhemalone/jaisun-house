//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/mainComponents/headerSection';

class Brands extends Component {
  render() {
    return (
      <div className="brands">
        <Header />
        <Grid fluid className="brands-container px-0">
          <Row className="brands__tiles">
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>

            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>

            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>

            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
            <Col xs={6} md={4}>
                <span className="d-flex justify-content-center">Image goes here</span>
            </Col>
          </Row>
        </Grid>
      </div>
    );  
  }
}

export default Brands;
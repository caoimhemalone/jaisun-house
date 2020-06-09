//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';


//components
import Header from '../components/mainComponents/headerSection';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
      <Header />
      <Grid fluid className="contact-container px-0">
      <Row className="contact__info">
          <Col xs={12} md={6}>
              <h2 className="d-flex justify-content-center">Info</h2>
          </Col>
          <Col xs={12} md={6}>
              <p className="d-flex justify-content-center">Map goes here</p>
          </Col>
      </Row>

      <Row className="contact__form">
          <Col xs={12} md={12}>
              <h2 className="d-flex justify-content-center">Form goes here</h2>
          </Col>
      </Row>
  </Grid>
  </div>
    );  
  }
}

export default Contact;
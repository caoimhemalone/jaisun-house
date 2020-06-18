import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios'


//components
import Header from '../components/mainComponents/headerSection';

class Contact extends Component {
  header = "Contact Us";
  render() {
    return (
      <div className="contact">
      <Header heading={this.header}/>
      <Grid fluid className="contact-container">
      <Row className="contact__info">
          <Col xs={12} md={6} className="contact__details">
              <h2 className="d-flex">Get in touch</h2>
              <div className="contact__details-item">
                <ion-icon name="location-outline"></ion-icon>
                <span>12345 Building, Dundrum, Dublin, Ireland</span>
              </div>
              <div className="contact__details-item">
                <ion-icon name="mail-outline"></ion-icon>
                <span>name@email.com</span>
              </div>
              <div className="contact__details-item">
                <ion-icon name="call-outline"></ion-icon>
                <span>01 0000000</span>
              </div>
          </Col>
          <Col xs={12} md={6} className="contact__map">
              <p className="d-flex justify-content-center">Map goes here</p>
          </Col>
      </Row>

      <hr/>

      <Row className="contact__form">
          <Col xs={12} md={12}>
              <h2 className="d-flex justify-content-center">Send us a message</h2>

              {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST"> */}
              <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </Col>
      </Row>
  </Grid>
  </div>
    );  
  }
}

export default Contact;
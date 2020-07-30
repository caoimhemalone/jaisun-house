import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
import Pulse from 'react-reveal/Pulse';


//components
import Header from '../components/mainComponents/headerSection';
import GMap from '../components/contactComponents/map';
import { diffDates } from "@fullcalendar/core";

class Contact extends Component {
  // state = {
  //   ttable: {},
  //   isLoaded: false
  // }

  constructor () {
    super();
    this.state = {
      ttable: [],
      isLoaded: false
    }
  }

  // componentDidMount() {
  //   axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/contact")
  //   .then(res => this.setState({
  //     contacttable: res.data[0],
  //     isLoaded: true
  //  }))
  //   .catch(error => console.log(error));
  // }

  componentDidMount (){

    const contactUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/contact';

    fetch(contactUrl)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({
        contact: response,
        isLoaded: true
      })
    })
  }

  // constructor(props) {    
  //   super(props)
  //   this.state = {
  //     condition: false
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick() {
  //   this.setState({
  //       condition: !this.state.condition
  //   })
  // }

  header = "Contact Us";
  render() {
    // const {contacttable } = this.state;
    // console.log(contacttable);
    return (
      <div className="contact">
        {JSON.stringify(this.state.contact.id)}
        <Header heading={this.header}/>
        <Grid fluid className="contact-container">
          <Row className="contact__info">
              <Col xs={12} md={6} className="contact__details">
                  <h2 className="d-flex">Get in touch</h2>
                  <div className="contact__details-item">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>
                      <a target="_blank" href="/">
                        {/* {contacttable.map(contact => (<div key={contact.id} dangerouslySetInnerHTML={{ __html:contact.acf.address}}/>))} */}
                        {/* {contacttable.acf.address} */}
                      </a>
                    </span>
                  </div>
                  <div className="contact__details-item">
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>
                      <a href="mailto:admin@key-vah.com?subject = Feedback&body = Message">
                        {/* {contacttable.map(contact => (<div key={contact.id} dangerouslySetInnerHTML={{ __html:contact.acf.email}}/>))} */}
                      </a>
                    </span>
                  </div>
                  <div className="contact__details-item">
                    <ion-icon name="call-outline"></ion-icon>
                    <span>
                      <a href="tel:123-456-7890">
                        {/* {contacttable.map(contact => (<div key={contact.id} dangerouslySetInnerHTML={{ __html:contact.acf.phone}}/>))} */}
                      </a>
                    </span>
                  </div>
              </Col>
              <Col xs={12} md={6} className="contact__map">
                    {/* <GMap /> */}
              </Col>
          </Row>

          <hr/>

          <Row className="contact__form">
              <Col xs={12} md={12}>
                <Pulse>
                  <h2 className="d-flex justify-content-center">Send us a message</h2>
                </Pulse>

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
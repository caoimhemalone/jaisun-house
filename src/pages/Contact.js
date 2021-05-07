import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';
import {Helmet} from "react-helmet";

//components
import Header from '../components/mainComponents/headerSection';
import ContactForm from '../components/mainComponents/contactform';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
        scheduletable: [],
        contact: [],
        isLoaded: false
    }
}

  componentDidMount() {
  const contactUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/contact_us/116';
  fetch(contactUrl)
  .then(response => response.json())
  .then(response => {
    //console.log(response);
    this.setState({
        contact: response,
        address: response.acf.address,
        phone: response.acf.phone,
        email: response.acf.email,
        opening_hours: response.acf.opening_hours,
        map_address: response.acf.map_address,
        email_mailto: "mailto:"+response.acf.email+"?subject = Feedback&body = Message",
      })
    })
    
      axios.get("https://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule/79")
        .then(res => this.setState({
        scheduletable: res.data,
        option_1: res.data.acf.form_brand_1,
        option_2: res.data.acf.form_brand_2,
        option_3: res.data.acf.form_brand_3,
        option_4: res.data.acf.form_brand_4,
        option_5: res.data.acf.form_brand_5,
        option_6: res.data.acf.form_brand_6,
        option_7: res.data.acf.form_brand_7,
        option_8: res.data.acf.form_brand_8,
        option_9: res.data.acf.form_brand_9,
        option_10: res.data.acf.form_brand_10,
        option_11: res.data.acf.form_brand_11,
        appt_msg: res.data.acf.appt_msg,
        }))
    .catch(error => console.log(error));

    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 3000)
  }

  header = "Contact Us";
  render() {
    const isLoaded  = this.state.isLoaded;
    const phone = 'tel:+'+this.state.phone;
    console.log('rerendering');
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.0639658309783!2d-6.244817463867604!3d53.302863836844715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709ea31ed84ed%3A0xd5639b90bf0b5bc9!2sJAISUN%20House!5e0!3m2!1sen!2sie!4v1605199341854!5m2!1sen!2sie" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

    function Iframe(props) {
      return (<div className="map-container" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    //if(isLoaded) {
    //return (

      //let renderContainer = false //By default don't render anything
      let renderContainer = <div className="loading"></div>
      if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
      renderContainer =
      <div className="contact">
        <Helmet>
          <title>Jaisun House | Contact Us</title>
          <meta name="description" content="Jaisun House - Representing the International Fashion Brands in Ireland" />
          <meta name="theme-color" content="#F7882F" />
        </Helmet>
        <Header heading={this.header}/>
        <Grid fluid className="contact-container">
          <Row className="contact__info">
              <Col xs={12} md={6} className="contact__details">
                  <h2 className="d-flex">Get in touch</h2>
                  <div className="contact__details-item">
                    <ion-icon name="location-outline"></ion-icon>
                    <span>
                      <a target="_blank" href={this.state.map_address}>
                        {this.state.address}
                      </a>
                    </span>
                  </div>
                  <div className="contact__details-item">
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>
                      <a href={this.state.email_mailto}>
                        {this.state.email}
                      </a>
                    </span>
                  </div>
                  <div className="contact__details-item">
                    <ion-icon name="call-outline"></ion-icon>
                    <span>
                      <a href={phone}>
                        +{this.state.phone}
                      </a>
                    </span>
                  </div>
                  <div className="contact__details-item">
                    <ion-icon name="time"></ion-icon>
                    <span>
                      Opening Hours:
                      <br/>
                        {this.state.opening_hours}
                    </span>
                  </div>
              </Col>
              <Col xs={12} md={6} className="contact__map">
                    <Iframe iframe={iframe} />
              </Col>
          </Row>

          <hr/>

          <Row className="contact__form">
              <Col xs={12} md={12}>
                <Pulse>
                  <h2 className="d-flex justify-content-center">Send us a message</h2>
                </Pulse>
                < ContactForm />
              </Col>
          </Row>
        </Grid>
      
      </div>
    //);
    } return (
      renderContainer
    )
  }
}

export default Contact;
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
import Pulse from 'react-reveal/Pulse';


//components
import Header from '../components/mainComponents/headerSection';
import GMap from '../components/contactComponents/map';
import { diffDates } from "@fullcalendar/core";

class Contact extends Component {
  constructor () {
    super();
    this.state = {
      ttable: [],
      isLoaded: false
    }
  }

  componentDidMount (){
    const contactUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/contact_us/116';
    fetch(contactUrl)
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      this.setState({
        contact: response,
        address: response.acf.address,
        phone: response.acf.phone,
        email: response.acf.email,
        map_address: response.acf.map_address,
        email_mailto: "mailto:"+response.acf.email+"?subject = Feedback&body = Message",
        isLoaded: true
      })
    })
  }

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
                      <a href={this.state.phone}>
                        {this.state.phone}
                      </a>
                    </span>
                  </div>
              </Col>
              <Col xs={12} md={6} className="contact__map">
                    <GMap />
              </Col>
          </Row>

          <hr/>

          <Row className="contact__form">
              <Col xs={12} md={12}>
                <Pulse>
                  <h2 className="d-flex justify-content-center">Send us a message</h2>
                </Pulse>

                <form action={this.state.email_mailto} method="POST" enctype="multipart/form-data" name="EmailForm">
                  <div className="form-left">
                    <div className="form-group">
                      <span>Company Details</span>
                      {/* Company Name */}
                      <label htmlFor="name">Company Name *</label>
                      <input type="text" className="form-control" required/>

                      {/* Company Address */}
                      <label htmlFor="address">Registered Company Address *</label>
                      <input type="text" className="form-control" required/>

                      <label htmlFor="address 2">Address2</label>
                      <input type="text" className="form-control"/>

                      <label htmlFor="town">Town/City*</label>
                      <input type="text" className="form-control" required/>

                      <label htmlFor="county">County/State</label>
                      <input type="text" className="form-control" required/>

                      <label htmlFor="postcode">Postcode/Zip*</label>
                      <input type="text" className="form-control" required/>

                      <label htmlFor="country">Country *</label>
                      {/* <input type="text" className="form-control" required/> */}
                      <select id="country" name="country" required>
                        <option value="Ireland">Ireland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <span>Contact Details</span>
                        <label htmlFor="name">Contact Name *</label>
                        <input type="text" className="form-control" required/>

                        <label htmlFor="phone">Contact Phone Number *</label>
                        <input type="number" className="form-control" required />
                        
                        <label htmlFor="email">Contact Email *</label>
                        <input type="email" className="form-control" required />
                    </div>
                 </div>
                  <div className="form-right">
                  <div className="form-group">
                      <span>Other Details</span>
                      <label>I am interested in *</label>
                      <br/>

                      <input type="checkbox" id="item1" name="item1" value="Guess Handbags/Accessories"/>
                      <label for="item1">Guess Handbags/Accessories</label>
                      <br/>

                      <input type="checkbox" id="item2" name="item2" value="Guess Clothing"/>
                      <label for="item2">Guess Clothing</label>
                      <br/>

                      <input type="checkbox" id="item3" name="item3" value="Tiffosi"/>
                      <label for="item3">Tiffosi</label>
                      <br/>

                      <input type="checkbox" id="item4" name="item4" value="Kendall and Kylie"/>
                      <label for="item4">Kendall & Kylie</label>
                      <br/>

                      <input type="checkbox" id="item5" name="item5" value="NA-KD"/>
                      <label for="item5">NA-KD</label>
                      <br/>

                      <input type="checkbox" id="item6" name="item6" value="Happy Socks"/>
                      <label for="item6">Happy Socks</label>
                      <br/>

                      <input type="checkbox" id="item7" name="item7" value="GANT Footwear"/>
                      <label for="item7">GANT Footwear</label>
                      <br/>

                      <input type="checkbox" id="item8" name="item8" value="Joop"/>
                      <label for="item8">Joop</label>
                      <br/>

                      <input type="checkbox" id="item9" name="item9" value="McGregor"/>
                      <label for="item9">McGregor</label>
                      <br/>

                      <input type="checkbox" id="item10" name="item10" value="Vanessa Wu"/>
                      <label for="item10">Vanessa Wu</label>
                      <br/>

                      <input type="checkbox" id="item11" name="item11" value="Fantasy Sandals"/>
                      <label for="item11">Fantasy Sandals</label>
                      <br/>

                      <input type="checkbox" id="item12" name="item12" value="General Inquiry"/>
                      <label for="item12">General Inquiry</label>
                    </div>

                    <div className="form-group">
                      <label>I require</label>
                      <br/>

                      <input type="checkbox" id="require1" name="require1" value="Book Appt"/>
                      <label for="require1">Book an appointment to view our collection</label>
                      <br/>

                      <input type="checkbox" id="require2" name="require2" value="Meeting"/>
                      <label for="require2">Arrange a meeting for more information</label>
                      <br/>

                      <input type="checkbox" id="require3" name="require3" value="Brand Marketing"/>
                      <label for="require3">Brand Marketing & Imagery</label>
                      <br/>

                      <input type="checkbox" id="require4" name="require4" value="Corporate"/>
                      <label for="require4">Corporate</label>
                      <br/>

                      <input type="checkbox" id="require5" name="require5" value="General"/>
                      <label for="require5">General Inquiry</label>
                      <br/>
                    </div>
                 
                    <div className="form-group">
                        <label htmlFor="message">Other Details</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
                  </div>

                  <div className="form-bottom">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
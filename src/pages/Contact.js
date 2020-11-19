import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';

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
        opening_hours: response.acf.opening_hours,
        map_address: response.acf.map_address,
        email_mailto: "mailto:"+response.acf.email+"?subject = Feedback&body = Message",
      })
    })
    
      axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule/79")
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
    console.log('rerendering');
    //const iframe = '<iframe src="https://snazzymaps.com/embed/267102" width="100%" height="600px" style="border:none;"></iframe>';
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.0639658309783!2d-6.244817463867604!3d53.302863836844715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709ea31ed84ed%3A0xd5639b90bf0b5bc9!2sJAISUN%20House!5e0!3m2!1sen!2sie!4v1605199341854!5m2!1sen!2sie" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

    function Iframe(props) {
      return (<div className="map-container" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }

    //if(isLoaded) {
    //return (

      //let renderContainer = false //By default don't render anything
      let renderContainer = <div class="loading"></div>
      if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
      renderContainer =
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

                <form action={this.state.email_mailto} method="POST" encType="multipart/form-data" name="EmailForm">
                  <div className="form-top">
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
                      <label className="lbl-heading">I am interested in *</label>

                      <div className="cbox-right">
                        <input type="checkbox" id="item1" name="item1" value={this.state.option_6}/>
                        <label className="cbox" htmlFor="item1">{this.state.option_6}</label>
                        <br/>

                        <input type="checkbox" id="item2" name="item2" value={this.state.option_7}/>
                        <label className="cbox" htmlFor="item2">{this.state.option_7}</label>
                        <br/>

                        <input type="checkbox" id="item3" name="item3" value={this.state.option_8}/>
                        <label className="cbox" htmlFor="item3">{this.state.option_8}</label>
                        <br/>

                        <input type="checkbox" id="item4" name="item4" value={this.state.option_9}/>
                        <label className="cbox" htmlFor="item4">{this.state.option_9}</label>
                        <br/>

                        <input type="checkbox" id="item5" name="item5" value={this.state.option_10}/>
                        <label className="cbox" htmlFor="item5">{this.state.option_10}</label>
                        <br/>

                        <input type="checkbox" id="item6" name="item6" value={this.state.option_11}/>
                        <label className="cbox" htmlFor="item11">{this.state.option_11}</label>
                      </div>

                      <div className="cbox-left">
                        <input type="checkbox" id="item7" name="item7" value={this.state.option_1}/>
                        <label className="cbox" htmlFor="item7">{this.state.option_1}</label>
                        <br/>

                        <input type="checkbox" id="item8" name="item8" value={this.state.option_2}/>
                        <label className="cbox" htmlFor="item8">{this.state.option_2}</label>
                        <br/>

                        <input type="checkbox" id="item9" name="item9" value={this.state.option_3}/>
                        <label className="cbox" htmlFor="item9">{this.state.option_3}</label>
                        <br/>

                        <input type="checkbox" id="item10" name="item10" value={this.state.option_4}/>
                        <label className="cbox" htmlFor="item10">{this.state.option_4}</label>
                        <br/>

                        <input type="checkbox" id="item11" name="item11" value={this.state.option_5}/>
                        <label className="cbox" htmlFor="item11">{this.state.option_5}</label>
                        <br/>

                        <input type="checkbox" id="item12" name="item12" value="General Inquiry"/>
                        <label className="cbox" htmlFor="item12">General Inquiry</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>I require</label>
                      <br/>

                      <input type="checkbox" id="require1" name="require1" value="Book Appt"/>
                      <label className="cbox" htmlFor="require1">Book an appointment to view our collection</label>
                      <br/>

                      <input type="checkbox" id="require2" name="require2" value="Meeting"/>
                      <label className="cbox" htmlFor="require2">Arrange a meeting for more information</label>
                      <br/>

                      <input type="checkbox" id="require3" name="require3" value="Brand Marketing"/>
                      <label className="cbox" htmlFor="require3">Brand Marketing & Imagery</label>
                      <br/>

                      <input type="checkbox" id="require4" name="require4" value="Corporate"/>
                      <label className="cbox" htmlFor="require4">Corporate</label>
                      <br/>

                      <input type="checkbox" id="require5" name="require5" value="General"/>
                      <label className="cbox" htmlFor="require5">General Inquiry</label>
                      <br/>
                    </div>
                 
                    <div className="form-group">
                        <label htmlFor="message">Other Details</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>
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
    //);
    } return (
      //<div class="loading"></div>
      renderContainer
    )
  }
}

export default Contact;
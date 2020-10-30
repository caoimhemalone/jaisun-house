import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

//components
import Header from '../components/mainComponents/headerSection';


class Schedule extends Component {
  constructor(){
    super();
    this.state = {
        scheduletable: [],
        contact: [],
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
      email: response.acf.email,
     // email_mailto: "mailto:"+response.acf.email+"?subject = Feedback&body = Message",
    })
  })
}
  componentDidMount() {
    axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule/79")
        .then(res => this.setState({
        scheduletable: res.data,
        latest_collection: res.data.acf.latest_collection,
        latest_col_img_1: res.data.acf.latest_collection_image_1.sizes.large,
        latest_col_img_2: res.data.acf.latest_collection_image_2.sizes.large,
        latest_col_img_3: res.data.acf.latest_collection_image_3.sizes.large,
        latest_col_img_4: res.data.acf.latest_collection_image_4.sizes.large,
        latest_col_img_5: res.data.acf.latest_collection_image_5.sizes.large,
        latest_col_img_6: res.data.acf.latest_collection_image_6.sizes.large,
        next_launch: res.data.acf.next_launch,
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
        isLoaded: true
        }))
    .catch(error => console.log(error));
  }

  header = "Schedule";
  render() {
    console.log(this.state.scheduletable);
    const mailTo = "mailto:admin@key-vah.com?subject = Feedback&body = Message"
    return (
      <div className="schedule">
        <Header heading={this.header}/>
        <Grid fluid className="schedule-container px-0">
          <Row className="schedule__latest">
            <Col xs={12} md={12}>
                <h2 className="d-flex justify-content-center">Latest Collection</h2>
            </Col>
            <Col xs={12} md={12}>
                <p className="d-flex justify-content-center">
                  {this.state.latest_collection}
                </p>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={this.state.latest_col_img_1} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={this.state.latest_col_img_2} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_3} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image"> 
                <img src={this.state.latest_col_img_4} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_5} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_6} alt="Placeholder"/>
            </Col>
          </Row>

          <Row className="schedule__next">
            <Col xs={12} md={12}>
            <span className="d-flex justify-content-center"><ion-icon name="calendar-outline"></ion-icon></span>
            </Col>
            <Col xs={12} md={12}>
                <h2 className="d-flex justify-content-center">Next Launch</h2>
            </Col>
            <Col xs={12} md={12}>
                <p className="d-flex justify-content-center">{this.state.next_launch}</p>
            </Col>
          </Row>

          <Row className="schedule__appt">
            <Col xs={12} md={12}>
              <Fade bottom>
                <h2><a href="/contact">BOOK AN APPOINTMENT</a> and come see us!</h2>
              </Fade>
              <hr/>

              <div className="schedule__appt-message">
                <div className="schedule__appt-message__container">
                  <h2>Showroom update</h2>
                  <div className="message" dangerouslySetInnerHTML={{ __html: this.state.appt_msg }}></div>
                </div>
              </div>
              <form action={this.state.email_mailto} method="POST" enctype="multipart/form-data" name="EmailForm">
                <div className="form-top">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" required/>
                    
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" required />

                    <input type="checkbox" id="email-sub" name="email-sub" value="email-sub"/>
                    <label className="cbox-label" for="email-sub">Check here to receive email updates</label>

                    <label htmlFor="phone">Phone Number *</label>
                    <input type="number" className="form-control" required />

                    <label for="meeting-time">Choose a time for your appointment:</label>

                    <input type="datetime-local" id="meeting-time" name="meeting-time"></input>

                    <label htmlFor="message">Comments/Questions</label>
                    <textarea className="form-control" rows="5"></textarea>

                    <label>I am interested in *</label>
                    <br/>
                    <div className="cbox-right">
                      <input type="checkbox" id="item1" name="item1" value={this.state.option_6}/>
                      <label for="item1" className="cbox-label">{this.state.option_6}</label>
                      <br/>

                      <input type="checkbox" id="item2" name="item2" value={this.state.option_7}/>
                      <label for="item2" className="cbox-label">{this.state.option_7}</label>
                      <br/>

                      <input type="checkbox" id="item3" name="item3" value={this.state.option_8}/>
                      <label for="item3" className="cbox-label">{this.state.option_8}</label>
                      <br/>

                      <input type="checkbox" id="item4" name="item4" value={this.state.option_9}/>
                      <label for="item4" className="cbox-label">{this.state.option_9}</label>
                      <br/>

                      <input type="checkbox" id="item5" name="item5" value={this.state.option_10}/>
                      <label for="item5" className="cbox-label">{this.state.option_10}</label>
                      <br/>

                      <input type="checkbox" id="item6" name="item6" value={this.state.option_11}/>
                      <label for="item6" className="cbox-label">{this.state.option_11}</label>
                    </div>  
                    <div className="cbox-left">
                      <input type="checkbox" id="item7" name="item7" value={this.state.option_1}/>
                      <label for="item7" className="cbox-label">{this.state.option_1}</label>
                      <br/>

                      <input type="checkbox" id="item8" name="item8" value={this.state.option_2}/>
                      <label for="item8" className="cbox-label">{this.state.option_2}</label>
                      <br/>

                      <input type="checkbox" id="item9" name="item9" value={this.state.option_3}/>
                      <label for="item9" className="cbox-label">{this.state.option_3}</label>
                      <br/>

                      <input type="checkbox" id="item10" name="item10" value={this.state.option_4}/>
                      <label for="item10" className="cbox-label">{this.state.option_4}</label>
                      <br/>

                      <input type="checkbox" id="item11" name="item11" value={this.state.option_5}/>
                      <label for="item11" className="cbox-label">{this.state.option_5}</label>
                      <br/>

                      <input type="checkbox" id="item12" name="item12" value="General Inquiry"/>
                      <label for="item12" className="cbox-label">General Inquiry</label>   
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
    );  
  }
}

export default Schedule;
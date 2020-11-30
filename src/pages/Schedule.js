import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

//components
import Header from '../components/mainComponents/headerSection';
import ScheduleForm from '../components/mainComponents/scheduleform';


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
        latest_col_img_7: res.data.acf.latest_collection_image_7.sizes.large,
        latest_col_img_8: res.data.acf.latest_collection_image_8.sizes.large,
        latest_col_img_9: res.data.acf.latest_collection_image_9.sizes.large,
        latest_col_img_10: res.data.acf.latest_collection_image_10.sizes.large,
        latest_col_img_11: res.data.acf.latest_collection_image_11.sizes.large,
        latest_col_img_12: res.data.acf.latest_collection_image_12.sizes.large,
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

    setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 3000)
  }

  header = "Schedule";
  render() {
    console.log(this.state.scheduletable);
    const mailTo = "mailto:admin@key-vah.com?subject = Feedback&body = Message"
    //return (
      let renderContainer = <div className="loading"></div>
      if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
      renderContainer =
      <div className="schedule">
        <Header heading={this.header}/>
        <Grid fluid className="schedule-container px-0">
          <Row className="schedule__latest">
            <Col xs={12} md={12}>
                <h2 className="d-flex justify-content-center">Latest Collection</h2>
            </Col>
            <Col xs={12} md={12}>
                <p className="d-flex justify-content-center latest_collection" dangerouslySetInnerHTML={{ __html:this.state.latest_collection}}></p>
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
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_7} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_8} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_9} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_10} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_11} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={this.state.latest_col_img_12} alt="Placeholder"/>
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
                <p className="d-flex justify-content-center next_launch" dangerouslySetInnerHTML={{ __html:this.state.next_launch}}></p>
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
              <ScheduleForm />
              {/* <form action={this.state.email_mailto} method="POST" encType="multipart/form-data" name="EmailForm">
                <div className="form-top">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="form-control" required/>
                    
                    <label htmlFor="email">Email *</label>
                    <input type="email" className="form-control" required />

                    <input type="checkbox" id="email-sub" name="email-sub" value="email-sub"/>
                    <label className="cbox-label" htmlFor="email-sub">Check here to receive email updates</label>

                    <label htmlFor="phone">Phone Number *</label>
                    <input type="number" className="form-control" required />

                    <label htmlFor="meeting-time">Choose a time for your appointment:</label>

                    <input type="datetime-local" id="meeting-time" name="meeting-time"></input>

                    <label htmlFor="message">Comments/Questions</label>
                    <textarea className="form-control" rows="5"></textarea>

                    <label>I am interested in *</label>
                    <br/>
                    <div className="cbox-right">
                      {this.state.option_6 ? (
                          <div>
                            <input type="checkbox" id="item1" name="item1" value={this.state.option_6}/>
                            <label htmlFor="item1" className="cbox-label">{this.state.option_6}</label>
                            <br/>
                          </div>
                        ) : null
                      }

                      {this.state.option_7 ? (
                          <div>
                            <input type="checkbox" id="item2" name="item2" value={this.state.option_7}/>
                            <label htmlFor="item2" className="cbox-label">{this.state.option_7}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_8 ? (
                          <div>
                            <input type="checkbox" id="item3" name="item3" value={this.state.option_8}/>
                            <label htmlFor="item3" className="cbox-label">{this.state.option_8}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_9 ? (
                          <div>
                            <input type="checkbox" id="item4" name="item4" value={this.state.option_9}/>
                            <label htmlFor="item4" className="cbox-label">{this.state.option_9}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_10 ? (
                          <div>
                            <input type="checkbox" id="item5" name="item5" value={this.state.option_10}/>
                            <label htmlFor="item5" className="cbox-label">{this.state.option_10}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_11 ? (
                          <div>
                            <input type="checkbox" id="item6" name="item6" value={this.state.option_11}/>
                            <label htmlFor="item6" className="cbox-label">{this.state.option_11}</label>
                            <br/>
                          </div>
                        ) : null
                      }  

                      {this.state.option_12 ? (
                          <div>
                            <input type="checkbox" id="item7" name="item7" value={this.state.option_12}/>
                            <label htmlFor="item7" className="cbox-label">{this.state.option_12}</label>
                            <br/>
                          </div>
                        ) : null
                      }  

                      {this.state.option_13 ? (
                          <div>
                            <input type="checkbox" id="item8" name="item8" value={this.state.option_13}/>
                            <label htmlFor="item8" className="cbox-label">{this.state.option_13}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_14 ? (
                          <div>
                            <input type="checkbox" id="item9" name="item9" value={this.state.option_14}/>
                            <label htmlFor="item9" className="cbox-label">{this.state.option_14}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_15 ? (
                          <div>
                            <input type="checkbox" id="item10" name="item10" value={this.state.option_15}/>
                            <label htmlFor="item10" className="cbox-label">{this.state.option_15}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_16 ? (
                          <div>
                            <input type="checkbox" id="item11" name="item11" value={this.state.option_16}/>
                            <label htmlFor="item11" className="cbox-label">{this.state.option_16}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_17 ? (
                          <div>
                            <input type="checkbox" id="item12" name="item12" value={this.state.option_17}/>
                            <label htmlFor="item7" className="cbox-label">{this.state.option_17}</label>
                            <br/>
                          </div>
                        ) : null
                      } 
                    </div>  
                    <div className="cbox-left">
                      {this.state.option_1 ? (
                          <div>
                            <input type="checkbox" id="item13" name="item13" value={this.state.option_1}/>
                            <label htmlFor="item13" className="cbox-label">{this.state.option_1}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_2 ? (
                          <div>
                            <input type="checkbox" id="item14" name="item14" value={this.state.option_2}/>
                            <label htmlFor="item14" className="cbox-label">{this.state.option_2}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_3 ? (
                          <div>
                            <input type="checkbox" id="item15" name="item15" value={this.state.option_3}/>
                            <label htmlFor="item15" className="cbox-label">{this.state.option_3}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_4 ? (
                          <div>
                            <input type="checkbox" id="item16" name="item16" value={this.state.option_4}/>
                            <label htmlFor="item16" className="cbox-label">{this.state.option_4}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      {this.state.option_5 ? (
                          <div>
                            <input type="checkbox" id="item17" name="item17" value={this.state.option_5}/>
                            <label htmlFor="item17" className="cbox-label">{this.state.option_5}</label>
                            <br/>
                          </div>
                        ) : null
                      } 

                      <input type="checkbox" id="item12" name="item12" value="General Inquiry"/>
                      <label htmlFor="item12" className="cbox-label">General Inquiry</label>   
                    </div>                
                  </div>
                </div>
                
                <div className="form-bottom">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form> */}
            </Col>
          </Row>
        </Grid>
      </div>
      } return (
        renderContainer
      )
    //);  
  }
}

export default Schedule;
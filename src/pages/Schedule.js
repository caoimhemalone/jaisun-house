import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import {Helmet} from "react-helmet";

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
  const contactUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/contact_us/116';
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
    axios.get("https://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule/79")
        .then(res => this.setState({
        scheduletable: res.data,
        latest_collection: res.data.acf.latest_collection,
        latest_col_img_1: res.data.acf.latest_collection_image_1,
        latest_col_img_2: res.data.acf.latest_collection_image_2,
        latest_col_img_3: res.data.acf.latest_collection_image_3,
        latest_col_img_4: res.data.acf.latest_collection_image_4,
        latest_col_img_5: res.data.acf.latest_collection_image_5,
        latest_col_img_6: res.data.acf.latest_collection_image_6,
        latest_col_img_7: res.data.acf.latest_collection_image_7,
        latest_col_img_8: res.data.acf.latest_collection_image_8,
        latest_col_img_9: res.data.acf.latest_collection_image_9,
        latest_col_img_10: res.data.acf.latest_collection_image_10,
        latest_col_img_11: res.data.acf.latest_collection_image_11,
        latest_col_img_12: res.data.acf.latest_collection_image_12,
        lc_img_orientation_1: res.data.acf.lc_image_orientation_1,
        lc_img_orientation_2: res.data.acf.lc_image_orientation_2,
        lc_img_orientation_3: res.data.acf.lc_image_orientation_3,
        lc_img_orientation_4: res.data.acf.lc_image_orientation_4,
        lc_img_orientation_5: res.data.acf.lc_image_orientation_5,
        lc_img_orientation_6: res.data.acf.lc_image_orientation_6,
        lc_img_orientation_7: res.data.acf.lc_image_orientation_7,
        lc_img_orientation_8: res.data.acf.lc_image_orientation_8,
        lc_img_orientation_9: res.data.acf.lc_image_orientation_9,
        lc_img_orientation_10: res.data.acf.lc_image_orientation_10,
        lc_img_orientation_11: res.data.acf.lc_image_orientation_11,
        lc_img_orientation_12: res.data.acf.lc_image_orientation_12,
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
    const mailTo = "mailto:admin@key-vah.com?subject = Feedback&body = Message"
    const scheduletable = this.state.scheduletable;
    //return (
      let renderContainer = <div className="loading"></div>
      if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
      renderContainer =
      <div className="schedule">
        <Helmet>
            <title>Jaisun House | Schedule</title>
            <meta name="description" content="Jaisun House - Representing the International Fashion Brands in Ireland" />
            <meta name="theme-color" content="#F7882F" />
        </Helmet>
        <Header heading={this.header}/>
        <Grid fluid className="schedule-container px-0">
          <Row className="schedule__latest">
            <Col xs={12} md={12}>
                <h2 className="d-flex justify-content-center">Latest Collection</h2>
            </Col>
            <Col xs={12} md={12}>
                <p className="d-flex justify-content-center latest_collection" dangerouslySetInnerHTML={{ __html:this.state.latest_collection}}></p>
            </Col>

            <Row className="schedule__image">
               {/* Image 1 */}
               {this.state.latest_col_img_1 ? (         
                        <div className={this.state.lc_img_orientation_1}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_1} alt="Latest Collection Image 1"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                }  

                {/* Image 2 */}
               {this.state.latest_col_img_2 ? (         
                        <div className={this.state.lc_img_orientation_2}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_2} alt="Latest Collection Image 2"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 3 */}
               {this.state.latest_col_img_3 ? (         
                        <div className={this.state.lc_img_orientation_3}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_3} alt="Latest Collection Image 3"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 4 */}
               {this.state.latest_col_img_4 ? (         
                        <div className={this.state.lc_img_orientation_4}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_4} alt="Latest Collection Image 4"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 5 */}
               {this.state.latest_col_img_5 ? (         
                        <div className={this.state.lc_img_orientation_5}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_5} alt="Latest Collection Image 5"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 6 */}
               {this.state.latest_col_img_6 ? (         
                        <div className={this.state.lc_img_orientation_6}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_6} alt="Latest Collection Image 6"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 7 */}
               {this.state.latest_col_img_7 ? (         
                        <div className={this.state.lc_img_orientation_7}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_7} alt="Latest Collection Image 7"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 8 */}
               {this.state.latest_col_img_8 ? (         
                        <div className={this.state.lc_img_orientation_8}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_8} alt="Latest Collection Image 8"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 
                {/* Image 9 */}
               {this.state.latest_col_img_9 ? (         
                        <div className={this.state.lc_img_orientation_9}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_9} alt="Latest Collection Image 9"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 10 */}
               {this.state.latest_col_img_10 ? (         
                        <div className={this.state.lc_img_orientation_10}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_10} alt="Latest Collection Image 10"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 11 */}
               {this.state.latest_col_img_11 ? (         
                        <div className={this.state.lc_img_orientation_11}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_11} alt="Latest Collection Image 11"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 

                {/* Image 12 */}
               {this.state.latest_col_img_12 ? (         
                        <div className={this.state.lc_img_orientation_12}>
                          <LazyLoad height={200} className="image-container">
                            <img src={this.state.latest_col_img_12} alt="Latest Collection Image 12"/>
                          </LazyLoad>
                        </div> 
                    ) : null
                } 
            </Row>
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
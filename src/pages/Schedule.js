import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fade from 'react-reveal/Fade';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';


class Schedule extends Component {
  state = {
    ttable: {},
    isLoaded: false
  }

  componentDidMount() {
    axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/schedule").then(res => {
        //console.log(res.data);
        this.setState({
        scheduletable: res.data,
        latest_collection: res.data[0].acf.latest_collection,
        latest_col_img_1: res.data[0].acf.latest_collection_image_1.sizes.large,
        latest_col_img_2: res.data[0].acf.latest_collection_image_2.sizes.large,
        latest_col_img_3: res.data[0].acf.latest_collection_image_3.sizes.large,
        latest_col_img_4: res.data[0].acf.latest_collection_image_4.sizes.large,
        latest_col_img_5: res.data[0].acf.latest_collection_image_5.sizes.large,
        latest_col_img_6: res.data[0].acf.latest_collection_image_6.sizes.large,
        next_launch: res.data[0].acf.next_launch,
        isLoaded: true
        })
    })
    .catch(error => console.log(error));
  }

  constructor(props) {    
    super(props)
    this.state = {
      condition: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
        condition: !this.state.condition
    })
  }

  header = "Schedule";
  render() {
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
              <form action={this.state.email_mailto} method="POST" enctype="multipart/form-data" name="EmailForm">
                  <div className="form-left">
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="form-control" required/>
                        
                        <label htmlFor="email">Email *</label>
                        <input type="email" className="form-control" required />

                        <label htmlFor="phone">Phone Number *</label>
                        <input type="number" className="form-control" required />

                        <label for="meeting-time">Choose a time for your appointment:</label>

                        <input type="datetime-local" id="meeting-time" name="meeting-time" value="2018-06-12T19:30" min="2018-06-07T00:00" max="2018-06-14T00:00" required/>

                        <label htmlFor="message">Comments/Questions</label>
                        <textarea className="form-control" rows="5"></textarea>

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
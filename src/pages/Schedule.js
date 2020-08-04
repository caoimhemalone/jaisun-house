import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Diary from '../components/scheduleComponents/diary';
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
        console.log(res.data);
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

          <Row className="schedule__calendar">
            <Col xs={12} md={12}>
              <Fade bottom>
                <h2>Here are our available dates. <a href="/contact">BOOK AN APPOINTMENT</a> and come see us!</h2>
              </Fade>
              <hr/>
              <Diary />
            </Col>
          </Row>
        </Grid>
      </div>
    );  
  }
}

export default Schedule;
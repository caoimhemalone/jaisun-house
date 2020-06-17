import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Diary from '../components/scheduleComponents/diary';

//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';

class Schedule extends Component {
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
                <p className="d-flex justify-content-center mb-4">Summer 2020</p>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={ph_square} alt="Placeholder Image"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={ph_square} alt="Placeholder Image"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ph_square} alt="Placeholder Image"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image"> 
                <img src={ph_square} alt="Placeholder Image"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ph_square} alt="Placeholder Image"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ph_square} alt="Placeholder Image"/>
            </Col>
          </Row>

          <Row className="schedule__next">
            <Col xs={12} md={12}>
            <span className="d-flex justify-content-center"><ion-icon name="calendar-outline"></ion-icon></span>
            </Col>
            <Col xs={12} md={12}>
                <h2 className="d-flex justify-content-center">Autumn 2020</h2>
            </Col>
            <Col xs={12} md={12}>
                <p className="d-flex justify-content-center">Info Info Info Info Info Info Info Info Info</p>
            </Col>
          </Row>

          <Row className="schedule__calendar">
            <Col xs={12} md={12}>
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
import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Diary from '../components/scheduleComponents/diary';
import Fade from 'react-reveal/Fade';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';
import ps_1 from '../assets/images/photoshoots/ps_1.jpg';
import ps_2 from '../assets/images/photoshoots/ps_2.jpg';
import ps_3 from '../assets/images/photoshoots/ps_3.jpg';
import ps_4 from '../assets/images/photoshoots/ps_4.jpg';
import ps_5 from '../assets/images/photoshoots/ps_5.jpg';
import ps_6 from '../assets/images/photoshoots/ps_6.jpg';



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
    const { scheduletable } = this.state;
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
                  {/* {scheduletable.title.rendered} */}
                  {/* {scheduletable.map(schedule => (<div key={schedule.id} dangerouslySetInnerHTML={{ __html:schedule.latest_collection}}/>))} */}
                </p>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={ps_1} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
              <img src={ps_2} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ps_3} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image"> 
                <img src={ps_4} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ps_5} alt="Placeholder"/>
            </Col>
            <Col xs={6} md={4} className="schedule__image">
                <img src={ps_6} alt="Placeholder"/>
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
                {/* <p className="d-flex justify-content-center">{scheduletable.map(schedule => (<div key={schedule.id} dangerouslySetInnerHTML={{ __html:schedule.next_launch}}/>))}</p> */}
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
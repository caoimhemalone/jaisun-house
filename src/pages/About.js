import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';


//components
import Header from '../components/mainComponents/headerSection';


class About extends Component {
  render() {
    return (
        <div className="about-us">
            <Header />
            <Grid fluid className="about-us-container px-0">
            <Row className="about-us__bio">
                <Col xs={12} md={12}>
                    <h2 className="d-flex justify-content-center">Who are we</h2>
                </Col>
                <Col xs={12} md={5}>
                    <p className="d-flex justify-content-center">Image goes here</p>
                </Col>
                <Col xs={12} md={7}>
                    <p className="d-flex justify-content-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
            
            <Row className="about-us__mission px-3">
                <Col xs={12} md={12}>
                    <h2 className="d-flex justify-content-center">Our Mission</h2>
                </Col>
                <Col xs={12} md={12}>
                    <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                </Col>
            </Row>

            <Row className="about-us__goals px-5 my-5 mx-3">
                <Col xs={4} md={4}>
                    <span className="d-flex justify-content-center">Goal 1 </span>
                </Col>
                <Col xs={4} md={4}>
                    <span className="d-flex justify-content-center">Goal 2 </span>
                </Col>
                <Col xs={4} md={4}>
                    <span className="d-flex justify-content-center">Goal 3 </span>
                </Col>
            </Row>
            
            <Row className="about-us__clients">
                <Col xs={12} md={12}>
                    <h2 className="d-flex justify-content-center">Our clients</h2>
                </Col>
                <Col xs={12} md={12}>
                    <p className="d-flex justify-content-center mb-4">A list of companies that have worked with us</p>
                </Col>
                <Col xs={2} md={2} mdOffset={1}>
                    <span className="d-flex justify-content-center">Image goes here</span>
                </Col>
                <Col xs={2} md={2}>
                    <span className="d-flex justify-content-center">Image goes here</span>
                </Col>
                <Col xs={2} md={2}>
                    <span className="d-flex justify-content-center">Image goes here</span>
                </Col>
                <Col xs={2} md={2}>
                    <span>Image goes here</span>
                </Col>
                <Col xs={2} md={2}>
                    <span className="d-flex justify-content-center">Image goes here</span>
                </Col>
            </Row>
            
        </Grid>
        </div>
    );  
  }
}

export default About;
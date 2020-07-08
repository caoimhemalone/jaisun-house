import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Zoom from 'react-reveal/Zoom';

//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';
import brand1 from "../assets/images/brands/gant_brand.jpg";
import brand2 from "../assets/images/brands/happy_socks_brand.png";
import brand3 from "../assets/images/brands/joop_brand.png";
import brand4 from "../assets/images/brands/guess_brand.png";
import brand5 from "../assets/images/brands/nakd_brand.png";
import brand6 from "../assets/images/brands/mcgregor_brand.png";
import brand7 from "../assets/images/brands/vanessa_wu_brand.jpg";
import brand8 from "../assets/images/brands/fantasy_sandals_brand.jpg";



class About extends Component {
    header = "About Us";
    render() {
        return (
            <div className="about-us">
                <Header heading={this.header}/>
                <Grid fluid className="about-us-container px-0">
                <Row className="about-us__bio">
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center heading">Who are we</h2>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={ph_square} alt="Placeholder Image"/>
                    </Col>
                    <Col xs={12} md={7} className="text-container">
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

                <Row className="about-us__goals px-5">
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="bulb-outline"></ion-icon>
                            <span className="d-flex justify-content-center">Goal 1 </span>
                            <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                        </Zoom>
                    </Col>
                    <Col xs={13} md={4}>
                        <Zoom>
                            <ion-icon name="cash-outline"></ion-icon>
                            <span className="d-flex justify-content-center">Goal 2 </span>
                            <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="star-outline"></ion-icon>
                            <span className="d-flex justify-content-center">Goal 3 </span>
                            <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                        </Zoom>
                    </Col>
                    <hr/>
                </Row>
                
                <Row className="about-us__clients">
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center">Our clients</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <p className="d-flex justify-content-center">A list of companies that have worked with us (CHANGE THIS TO BE ACTUAL SHOPS)</p>
                    </Col>
                    <Row className="brands-tiles">
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand1}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand2}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand6}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand4}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand5}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={brand3}/>
                            </a>
                        </Col>
                    </Row>
                </Row>
                
            </Grid>
            </div>
        );  
    }
}

export default About;
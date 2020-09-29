import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';

//images
import about_image from '../assets/images/stock/about-us.jpg';

class About extends Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/about_us/')
        .then(res => {
            //console.log(res.data);
            this.setState({
                abouttable: res.data,
                who_are_we: res.data[0].acf.who_are_we,
                mission: res.data[0].acf.mission,
                service_1: res.data[0].acf.service_1,
                service_1_info: res.data[0].acf.service_1_info,
                service_2: res.data[0].acf.service_2,
                service_2_info: res.data[0].acf.service_2_info,
                service_3: res.data[0].acf.service_3,
                service_3_info: res.data[0].acf.service_3_info,
                client_1: res.data[0].acf.client_1,
                client_1_image: res.data[0].acf.client_1_image.sizes.medium,
                client_2: res.data[0].acf.client_2,
                client_2_image: res.data[0].acf.client_2_image.sizes.medium,
                client_3: res.data[0].acf.client_3,
                client_3_image: res.data[0].acf.client_3_image.sizes.medium,
                client_4: res.data[0].acf.client_4,
                client_4_image: res.data[0].acf.client_4_image.sizes.medium,
                client_5: res.data[0].acf.client_5,
                client_5_image: res.data[0].acf.client_5_image.sizes.medium,
                client_6: res.data[0].acf.client_6,
                client_6_image: res.data[0].acf.client_6_image.sizes.medium,
                isLoaded: true
            })
        })
        .catch(err => console.log(err));
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
                    <Col xs={12} md={5} className="about-us__image">
                        <img src={about_image} alt="Office Meeting"/>
                    </Col>
                    <Col xs={12} md={7} className="text-container">
                        <div dangerouslySetInnerHTML={{ __html: this.state.who_are_we }}></div>
                    </Col>
                </Row>
                
                <Row className="about-us__mission px-3">
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center">Our Mission</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <div dangerouslySetInnerHTML={{ __html: this.state.mission }}></div>
                    </Col>
                </Row>

                <Row className="about-us__services px-5">
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="bulb-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {this.state.service_1}
                            </span>
                            <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_1_info }}></div>
                            <a>Read More</a>
                        </Zoom>
                    </Col>
                    <Col xs={13} md={4}>
                        <Zoom>
                            <ion-icon name="cash-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {this.state.service_2}
                            </span>
                            <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_2_info }}></div>
                            <a>Read More</a>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="star-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {this.state.service_3}
                            </span>
                            <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_3_info }}></div>
                            <a>Read More</a>
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
                                <img src={this.state.client_1_image} alt={this.state.client_1}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={this.state.client_2_image} alt={this.state.client_2}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={this.state.client_3_image} alt={this.state.client_3}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={this.state.client_4_image} alt={this.state.client_4}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={this.state.client_5_image} alt={this.state.client_5}/>
                            </a>
                        </Col>
                        <Col xs={6} md={2} className="brands-tiles__item">
                            <a href="/individual-brand">
                                <img src={this.state.client_6_image} alt={this.state.client_6}/>
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
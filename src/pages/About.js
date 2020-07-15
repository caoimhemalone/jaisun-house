import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';

//images
import ph_square from '../assets/images/placeholder-square.jpg';
import brand1 from "../assets/images/brands/gant_brand.png";
import brand2 from "../assets/images/brands/happy_socks_brand.png";
import brand3 from "../assets/images/brands/joop_brand.png";
import brand4 from "../assets/images/brands/guess_brand.png";
import brand5 from "../assets/images/brands/nakd_brand.png";
import brand6 from "../assets/images/brands/mcgregor_brand.png";
import brand7 from "../assets/images/brands/vanessa_wu_brand.png";
import brand8 from "../assets/images/brands/fantasy_sandals_brand.png";



class About extends Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/about_us/')
        .then(res => {
            console.log(res.data);
            this.setState({
                abouttable: res.data,
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
        const {abouttable, isLoaded } = this.state;
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
                        <p className="d-flex justify-content-right">
                            {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.who_are_we}}/>))} */}
                        </p>
                    </Col>
                </Row>
                
                <Row className="about-us__mission px-3">
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center">Our Mission</h2>
                    </Col>
                    <Col xs={12} md={12}>
                        <p className="d-flex justify-content-center">
                            {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.mission}}/>))} */}
                        </p>
                    </Col>
                </Row>

                <Row className="about-us__goals px-5">
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="bulb-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_1}}/>))} */}
                            </span>
                            <p className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_1_info}}/>))} */}
                            </p>
                        </Zoom>
                    </Col>
                    <Col xs={13} md={4}>
                        <Zoom>
                            <ion-icon name="cash-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_2}}/>))} */}
                            </span>
                            <p className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_2_info}}/>))} */}
                            </p>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={4}>
                        <Zoom>
                            <ion-icon name="star-outline"></ion-icon>
                            <span className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_3}}/>))} */}
                            </span>
                            <p className="d-flex justify-content-center">
                                {/* {abouttable.map(about => (<div key={about.id} dangerouslySetInnerHTML={{ __html:about.acf.goal_3_info}}/>))} */}
                            </p>
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
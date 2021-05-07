import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import {Helmet} from "react-helmet";


//components
import Header from '../components/mainComponents/headerSection';

//images
import about_image from '../assets/images/stock/about-us.jpg';

class About extends Component {
    constructor(){
        super();
        this.state = {
            brands: [],
            isLoaded: false
        }
    }
  
     componentDidMount(){
        const brandUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand?per_page=100';
    
        fetch(brandUrl)
        .then(response => response.json())
        .then(response => {
          //response.sort((a, b) => a.id - b.id);
          response.sort((a, b) => parseFloat(a.acf['order_no']) - parseFloat(b.acf['order_no']));
          this.setState({
            brands: response,
            isLoaded: true
          })
        })

        axios.get('https://www.jaisunhouse.com/wp/wp-json/wp/v2/about_us/')
        .then(res => {
            //console.log(res.data);
            this.setState({
                abouttable: res.data,
                who_are_we: res.data[0].acf.who_are_we,
                who_are_we_image: res.data[0].acf.who_are_we_image,
                mission: res.data[0].acf.mission,
                isLoaded: true
            })
        })
        .catch(err => console.log(err));
     }
  

    header = "About";
    render() {

        // const brandsInfo = this.state.brands.slice(0, 6);
        const brandsInfo = this.state.brands;
        const brandLoop = brandsInfo.map((brand, index)=> {
            return (
                <div className="brands-tiles__item" key={index}>
                    <a href={brand.slug}>
                        <img src={brand.acf.tile_image} alt={brand.title.rendered}/>
                    </a>
                </div>
            )
        })

        return (
            <div className="about-us">
                <Helmet>
                    <title>Jaisun House | About Us</title>
                    <meta name="description" content="Jaisun House - Representing the International Fashion Brands in Ireland" />
                    <meta name="theme-color" content="#F7882F" />
                </Helmet>
                <Header heading={this.header}/>
                <Grid fluid className="about-us-container px-0">
                    <Row className="about-us__bio">
                        <Col xs={12} md={12}>
                            <h2 className="d-flex justify-content-center heading">Who are we</h2>
                        </Col>
                        <Col xs={12} md={12} lg={5} className="about-us__image">
                            <img src={this.state.who_are_we_image} alt="Quote"/>
                        </Col>
                        <Col xs={12} md={12} lg={7} className="text-container">
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
                    
                    <Row className="about-us__clients">
                        <Col xs={12} md={12}>
                            <h2 className="d-flex justify-content-center">Our Brands</h2>
                        </Col>
                        <Col xs={12} md={12}>
                            <p className="d-flex justify-content-center">Current and forward collections viewings available in our Dublin based showrooms</p>
                        </Col>
                        <Row className="brands-tiles">
                            {brandLoop}
                        </Row>
                    </Row>
                </Grid>
            </div>
        );  
    }
}

export default About;
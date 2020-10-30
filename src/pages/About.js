import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';


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
        const brandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand?per_page=100';
    
        fetch(brandUrl)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          //response.sort((a, b) => a.id - b.id);
          response.sort((a, b) => parseFloat(a.acf['order_no']) - parseFloat(b.acf['order_no']));
          this.setState({
            brands: response,
            isLoaded: true
          })
        })

        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/about_us/')
        .then(res => {
            //console.log(res.data);
            this.setState({
                abouttable: res.data,
                who_are_we: res.data[0].acf.who_are_we,
                mission: res.data[0].acf.mission,
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
  

    header = "About Us";
    render() {

        const brandsInfo = this.state.brands.slice(0, 6);
        console.log(brandsInfo);
        const brandLoop = brandsInfo.map((brand, index)=> {
            return (
                <Col xs={6} md={2} className="brands-tiles__item" key={index}>
                    <a href={brand.slug}>
                        <img src={brand.acf.tile_image} alt={brand.title.rendered}/>
                    </a>
                </Col>
            )
        })

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
                    
                    <Row className="about-us__clients">
                        <Col xs={12} md={12}>
                            <h2 className="d-flex justify-content-center">Our clients</h2>
                        </Col>
                        <Col xs={12} md={12}>
                            <p className="d-flex justify-content-center">Some companies that have worked with us</p>
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
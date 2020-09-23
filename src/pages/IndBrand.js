import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List } from 'react-content-loader';
import { BrowserRouter as Link} from "react-router-dom";

//components
import Header from '../components/mainComponents/headerSection';
import BrandCarousel from '../components/brandComponents/brandCarousel';

class IndBrands extends Component {
    state = {
        ttable: {},
        isLoaded: false
    }

    componentDidMount (){
        const indBrandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand/?slug=' + this.props.match.params.slug;
        fetch(indBrandUrl)
        .then(response => response.json())
        .then(response => {
          console.log(response[0]);
          this.setState({
            indbrandtable: response[0],
            brand_image_1: response[0].acf.brand_image_1,
            brand_image_1_title: response[0].acf.brand_image_1.title,
            brand_image_2: response[0].acf.brand_image_2,
            brand_image_2_title: response[0].acf.brand_image_2.title,
            brand_image_3: response[0].acf.brand_image_3,
            brand_image_3_title: response[0].acf.brand_image_3.title,
            brand_image_4: response[0].acf.brand_image_4,
            brand_image_4_title: response[0].acf.brand_image_4.title,
            brand_image_5: response[0].acf.brand_image_5,
            brand_image_5_title: response[0].acf.brand_image_5.title,
            brand_image_6: response[0].acf.brand_image_6,
            brand_image_6_title: response[0].acf.brand_image_6.title,
            brand_image_7: response[0].acf.brand_image_7,
            brand_image_7_title: response[0].acf.brand_image_7.title,
            brand_image_8: response[0].acf.brand_image_8,
            brand_image_8_title: response[0].acf.brand_image_8.title,
            brand_image_9: response[0].acf.brand_image_9,
            brand_image_9_title: response[0].acf.brand_image_9.title,
            slug: response[0].slug,
            isLoaded: true
          })
        })  
    }
    

    render() {
        const brand_name = this.state.slug;
        const classes = `ind-brands ${brand_name}`;

        const indbrandtable = this.state.indbrandtable;
        const isLoaded  = this.state.isLoaded;
        const MyListLoader = () => <List />

        if(isLoaded) {
            return (
                <div className={classes} style={{backgroundImage: 'url(' + indbrandtable.acf.header_image.sizes.large + ')'}}>
                    <div className="overlay">   
                        <Header heading={indbrandtable.title.rendered}/>
                        <Grid fluid className="ind-brands-container px-0">
                            <Row className="ind-brands__details">
                                <Col xs={12} md={12} className="ind-brands__details__container">
                                    <a href="/brands">
                                        <Link to="/brands">Back to Brands</Link>
                                    </a>
                                    <span className="d-flex justify-content-center ind-brands__text">
                                        {indbrandtable.acf.bio}
                                    </span>
                                </Col>
                            </Row>
                            <Row className="ind-brands__tiles">
                                <Col xs={12} md={12}>   
                                    {/* <BrandCarousel img1={this.state.brand_image_1} img2={this.state.brand_image_2} img3={this.state.brand_image_3} img4={this.state.brand_image_4} img5={this.state.brand_image_5} img6={this.state.brand_image_6} img7={this.state.brand_image_7} img8={this.state.brand_image_8} img9={this.state.brand_image_9} /> */}
                                {/* Add a field in the DB that states if it's vertical or horizontal, if the foeld is empty don't show image */}
                                </Col>    
                            </Row>
                        </Grid>
                    </div>
                </div>
            );
        } return <MyListLoader/>;
    }
}

export default IndBrands;
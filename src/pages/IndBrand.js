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
    
    componentDidMount() {
        axios.get("http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand/" + this.props.match.params.id)
        .then(res => {
            console.log(res.data);
            this.setState({
            indbrandtable: res.data,
            brand_image_1: res.data.acf.brand_image_1,
            brand_image_1_title: res.data.acf.brand_image_1.title,
            brand_image_2: res.data.acf.brand_image_2,
            brand_image_2_title: res.data.acf.brand_image_2.title,
            brand_image_3: res.data.acf.brand_image_3,
            brand_image_3_title: res.data.acf.brand_image_3.title,
            brand_image_4: res.data.acf.brand_image_4,
            brand_image_4_title: res.data.acf.brand_image_4.title,
            brand_image_5: res.data.acf.brand_image_5,
            brand_image_5_title: res.data.acf.brand_image_5.title,
            brand_image_6: res.data.acf.brand_image_6,
            brand_image_6_title: res.data.acf.brand_image_6.title,
            brand_image_7: res.data.acf.brand_image_7,
            brand_image_7_title: res.data.acf.brand_image_7.title,
            slug: res.data.slug,
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

    image_1 = this.state.brand_image_1;
    image_2 = this.state.brand_image_2;
    image_3 = this.state.brand_image_3;

    render() {
        const brand_name = this.state.slug;
        const classes = `ind-brands ${brand_name}`;

        const image_title_1 = this.state.brand_image_1_title;
        const img_classes_1 = `ind-brands__tiles__item item-1 ${image_title_1}`;

        const image_title_2 = this.state.brand_image_2_title;
        const img_classes_2 = `ind-brands__tiles__item item-2 ${image_title_2}`;

        const image_title_3 = this.state.brand_image_3_title;
        const img_classes_3 = `ind-brands__tiles__item item-3 ${image_title_3}`;

        const image_title_4 = this.state.brand_image_4_title;
        const img_classes_4 = `ind-brands__tiles__item item-4 ${image_title_4}`;

        const image_title_5 = this.state.brand_image_5_title;
        const img_classes_5 = `ind-brands__tiles__item item-5 ${image_title_5}`;

        const image_title_6 = this.state.brand_image_6_title;
        const img_classes_6 = `ind-brands__tiles__item item-6 ${image_title_6}`;

        const image_title_7 = this.state.brand_image_7_title;
        const img_classes_7 = `ind-brands__tiles__item item-7 ${image_title_7}`;

        const {indbrandtable, isLoaded } = this.state;
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
                            <BrandCarousel img1={this.image_1} img2={this.image_2} img3={this.image_3}/>
                            </Col>
                                <Col xs={6} md={3} className={img_classes_1}>
                                    <img src={this.state.brand_image_1.sizes.large} alt={indbrandtable.title.rendered}/>
                                </Col>
                                <Col xs={6} md={3} className={img_classes_2}>
                                    <img src={this.state.brand_image_2.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3} className={img_classes_3}>
                                    <img src={this.state.brand_image_3.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3} className={img_classes_4}>
                                    <img src={this.state.brand_image_4.sizes.large} alt={indbrandtable.title}/>
                                </Col>

                                <Col xs={6} md={3} className={img_classes_5}>
                                    <img src={this.state.brand_image_5.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                
                                <Col xs={6} md={3}  className={img_classes_6}>
                                    <img src={this.state.brand_image_6.sizes.large} alt={indbrandtable.title}/>
                                </Col>

                                <Col xs={6} md={3}  className={img_classes_7}>
                                    <img src={this.state.brand_image_7.sizes.large} alt={indbrandtable.title}/>
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
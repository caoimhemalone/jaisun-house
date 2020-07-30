import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List } from 'react-content-loader';
import { BrowserRouter as Link} from "react-router-dom";


//images
//import guess1 from '../assets/images/brands/photoshoots/guess_1.jpeg';


//components
import Header from '../components/mainComponents/headerSection';


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

    render() {
        const {indbrandtable, isLoaded } = this.state;
        const MyListLoader = () => <List />

        if(isLoaded) {
            return (
                <div className="ind-brands" style={{backgroundImage: 'url(' + indbrandtable.acf.header_image.sizes.large + ')'}}>
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
                                <Col xs={6} md={3} className="ind-brands__tiles__item item-1">
                                    <img src={indbrandtable.acf.brand_image_1.sizes.large} alt={indbrandtable.title.rendered}/>
                                </Col>
                                <Col xs={6} md={3} className="ind-brands__tiles__item item-2">
                                    <img src={indbrandtable.acf.brand_image_2.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3} className="ind-brands__tiles__item item-3">
                                    <img src={indbrandtable.acf.brand_image_3.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3} className="ind-brands__tiles__item item-4">
                                    <img src={indbrandtable.acf.brand_image_4.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3}  className="ind-brands__tiles__item item-5">
                                    <img src={indbrandtable.acf.brand_image_5.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3}  className="ind-brands__tiles__item item-6">
                                    <img src={indbrandtable.acf.brand_image_6.sizes.large} alt={indbrandtable.title}/>
                                </Col>
                                <Col xs={6} md={3}  className="ind-brands__tiles__item item-7">
                                    <img src={indbrandtable.acf.brand_image_7.sizes.large} alt={indbrandtable.title}/>
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
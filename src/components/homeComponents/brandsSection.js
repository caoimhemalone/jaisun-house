import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';


// import brand1 from "../../assets/images/brands/gant_brand";
// import brand2 from "../../assets/images/brands/happy_socks_brand";
// import brand3 from "../../assets/images/brands/joop_brand";
// import brand4 from "../../assets/images/brands/guess_brand";
// import brand5 from "../../assets/images/brands/nakd_brand";
// import brand6 from "../../assets/images/brands/mcgregor_brand";
// import brand7 from "../../assets/images/brands/vanessa_wu_brand";
// import brand8 from "../../assets/images/brands/fantasy_sandals_brand";

class Brands extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
        .then(res => this.setState({
           brandtable: res.data,
           isLoaded: true
        }))
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
  
    render() {
        const {brandtable, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                    <Grid fluid className="brands-container">
                        <Row className="brands-heading heading">
                            <Col xs={12} md={12} className="brands-heading__container">
                                <h2 className="d-flex justify-content-center">Brands</h2>
                            </Col>
                        </Row>

                        <div className="brands-tiles">
                            <div className="brands-tiles__item">
                                {/* <img src={brand1}/> */}
                                <img src={brandtable.map(brands_home_img_1 => (<div key={brands_home_img_1.id} dangerouslySetInnerHTML={{ __html:brands_home_img_1.acf.brands_home_img_1}}/>))} alt={brandtable.map(brands_home_img_1 => (<div key={brands_home_img_1.id} dangerouslySetInnerHTML={{ __html:brands_home_img_1.acf.title}}/>))}/>
                                {/* <img src="../../assets/images/brands/gant_brand.jpg" alt={brand_1}/> */}
                                <span>{brandtable.map(brands_home_1 => (
                                    <div key={brands_home_1.id} dangerouslySetInnerHTML={{ __html:brands_home_1.acf.brands_home_1}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand2}/> */}
                                <span>{brandtable.map(brands_home_2 => (
                                    <div key={brands_home_2.id} dangerouslySetInnerHTML={{ __html:brands_home_2.acf.brands_home_2}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand6}/> */}
                                <span>{brandtable.map(brands_home_3 => (
                                    <div key={brands_home_3.id} dangerouslySetInnerHTML={{ __html:brands_home_3.acf.brands_home_3}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand4}/> */}
                                <span>{brandtable.map(brands_home_4 => (
                                    <div key={brands_home_4.id} dangerouslySetInnerHTML={{ __html:brands_home_4.acf.brands_home_4}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand5}/> */}
                                <span>{brandtable.map(brands_home_5 => (
                                    <div key={brands_home_5.id} dangerouslySetInnerHTML={{ __html:brands_home_5.acf.brands_home_5}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand3}/> */}
                                <span>{brandtable.map(brands_home_6 => (
                                    <div key={brands_home_6.id} dangerouslySetInnerHTML={{ __html:brands_home_6.acf.brands_home_6}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand7}/> */}
                                <span>{brandtable.map(brands_home_7 => (
                                    <div key={brands_home_7.id} dangerouslySetInnerHTML={{ __html:brands_home_7.acf.brands_home_7}}/>
                                ))}</span>
                            </div>
                            <div className="brands-tiles__item">
                                {/* <img src={brand8}/> */}
                                <span>{brandtable.map(brands_home_8 => (
                                    <div key={brands_home_8.id} dangerouslySetInnerHTML={{ __html:brands_home_8.acf.brands_home_8}}/>
                                ))}</span>
                            </div>
                        </div>
                    </Grid>
                </div>
            );
        } return null;
    }
}

export default Brands;
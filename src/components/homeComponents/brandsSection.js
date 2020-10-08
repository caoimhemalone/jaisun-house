import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

import data from '../../utils/cms-data/homepage.json';

import brand1 from "../../assets/images/brands/gant_brand.png";
import brand2 from "../../assets/images/brands/happy_socks_brand.png";
import brand3 from "../../assets/images/brands/joop_brand.png";
import brand4 from "../../assets/images/brands/guess_brand.png";
import brand5 from "../../assets/images/brands/nakd_brand.png";
import brand6 from "../../assets/images/brands/mcgregor_brand.png";
import brand7 from "../../assets/images/brands/vanessa_wu_brand.png";
import brand8 from "../../assets/images/brands/fantasy_sandals_brand.png";


class Brands extends React.Component {
    // state = {
    //     ttable: {},
    //     isLoaded: false
    //  }
  
    //  componentDidMount(){
    //     axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
    //     .then(res => this.setState({
    //        brandtable: res.data,
    //        isLoaded: true
    //     }))
    //     .catch(err => console.log(err));
    //  }
  
    //  constructor(props) {    
    //   super(props)
    //   this.state = {
    //     condition: false
    //   }
    //   this.handleClick = this.handleClick.bind(this)
    // }
    // handleClick() {
    //   this.setState({
    //     condition: !this.state.condition
    //   })
    // }

    // constructor () {
    //     super();
    //     this.state = {
    //       brands: [],
    //       isLoaded: false
    //     }
    // }
    
    //   componentDidMount (){
    
    //     const brandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand';
    
    //     fetch(brandUrl)
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log(response);
    //       //response.sort((a, b) => a.id - b.id);
    //       this.setState({
    //         brands: response,
    //         isLoaded: true
    //       })
    //     })
    //   }
  
    render() {
        //const {brands, isLoaded } = this.state;

        // let brandLoop = brands.slice(0, 8).map((brand, index)=> {
        //     let imgUrl = brand.acf.tile_image.sizes.thumbnail;
        //     // let link = 'brands/'+brand.id
        //     let link = brand.slug
        //     return (
        //         <a href={link} className="brands-tiles__item">
        //             <img src={imgUrl} alt={brand.title.rendered}/>
        //             <span>
        //                 {brand.title.rendered}
        //             </span>
        //         </a>      
        //     )
        // })

        //if(isLoaded) {
            return (
                <div>
                    <Grid fluid className="brands-container">
                        <Row className="brands-heading heading">
                            <Col xs={12} md={12} className="brands-heading__container">
                                <h2 className="d-flex justify-content-center">Brands</h2>
                            </Col>
                        </Row>

                        <div className="brands-tiles">
                           {/* {brandLoop} */}
                           {/* {JSON.stringify(brands)} */}
                           {
                                data.Home.map((hdata, i) => {
                                    if(hdata.field_name.includes('brands_home')){
                                        return (
                                            <div key={i}>
                                                <div>
                                                    {hdata.text}
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    </Grid>
                </div>
            );
        //} return null;
    }
}

export default Brands;
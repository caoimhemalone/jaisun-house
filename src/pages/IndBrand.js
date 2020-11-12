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
            header_image: response[0].acf.header_image,
            header_image_mobile: response[0].acf.header_image_mobile,
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
        const MyListLoader = () => <div className="loader" style={{marginTop: 100 + 'px', marginBottom: 100 +'px', marginLeft: 10 +'px', marginRight: 10 +'px', height: 340 +'px'}}><List /></div>
        const desktopImage = this.state.header_image;
        const mobileImage = this.state.header_image_mobile;
        
        const imageUrl = window.innerWidth >= 767 ? desktopImage : mobileImage;
       

      //style={{backgroundImage: 'url(' + indbrandtable.acf.header_image + ')'}}

        if(isLoaded) {
            return (
                <div className={classes} style={{backgroundImage: `url(${imageUrl})` }}>
                    <div className="overlay">   
                        <Header heading={indbrandtable.title.rendered}/>
                        <Grid fluid className="ind-brands-container px-0">
                            <Row className="ind-brands__details">
                                <Col xs={12} md={12} className="ind-brands__details__container">
                                    <a href="/brands">
                                        <Link to="/brands">Back to Brands</Link>
                                    </a>
                                    <span className="d-flex justify-content-center ind-brands__text"  dangerouslySetInnerHTML={{ __html:indbrandtable.acf.bio}}></span>
                                </Col>
                            </Row>
                            <Row className="ind-brands__tiles">
                                {/* Image 1 */}
                                {indbrandtable.acf.brand_image_1 ? (
                                     
                                        <div className={indbrandtable.acf.image_1_orientation}>
                                            <img src={indbrandtable.acf.brand_image_1} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                }  

                                 {/* Image 2 */}
                                 {indbrandtable.acf.brand_image_2 ? (
                                     
                                        <div className={indbrandtable.acf.image_2_orientation}>
                                            <img src={indbrandtable.acf.brand_image_2} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 3 */}
                                 {indbrandtable.acf.brand_image_3 ? (
                                     
                                        <div className={indbrandtable.acf.image_3_orientation}>
                                            <img src={indbrandtable.acf.brand_image_3} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 4 */}
                                 {indbrandtable.acf.brand_image_4 ? (
                                     
                                        <div className={indbrandtable.acf.image_4_orientation}>
                                            <img src={indbrandtable.acf.brand_image_4} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 5 */}
                                 {indbrandtable.acf.brand_image_5 ? (
                                     
                                        <div className={indbrandtable.acf.image_5_orientation}>
                                            <img src={indbrandtable.acf.brand_image_5} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 6 */}
                                 {indbrandtable.acf.brand_image_6 ? (
                                     
                                        <div className={indbrandtable.acf.image_6_orientation}>
                                            <img src={indbrandtable.acf.brand_image_6} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 7 */}
                                 {indbrandtable.acf.brand_image_7 ? (
                                     
                                        <div className={indbrandtable.acf.image_7_orientation}>
                                            <img src={indbrandtable.acf.brand_image_7} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 8 */}
                                 {indbrandtable.acf.brand_image_8 ? (
                                     
                                        <div className={indbrandtable.acf.image_8_orientation}>
                                            <img src={indbrandtable.acf.brand_image_8} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    ) : null
                                } 

                                 {/* Image 9 */}
                                 {indbrandtable.acf.brand_image_9 ? (
                                     
                                        <div className={indbrandtable.acf.image_9_orientation}>
                                            <img src={indbrandtable.acf.brand_image_9} alt={ indbrandtable.title.rendered}/>
                                        </div> 
                                    
                                    ) : null
                                } 
                            </Row>

                            {indbrandtable.acf.video ? (
                                <Row className="ind-brands__video">
                                    <Col xs={12} md={12}> 
                                        <div dangerouslySetInnerHTML={{ __html:indbrandtable.acf.video}}></div> 
                                   </Col>
                               </Row>) : null
                            }
                        </Grid>
                    </div>
                </div>
            );
       } 
        return <MyListLoader/>;
    }
}

export default IndBrands;
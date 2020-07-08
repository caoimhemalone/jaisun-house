import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import brand1 from "../../assets/images/brands/gant_brand.jpg";
import brand2 from "../../assets/images/brands/happy_socks_brand.png";
import brand3 from "../../assets/images/brands/joop_brand.png";
import brand4 from "../../assets/images/brands/guess_brand.png";
import brand5 from "../../assets/images/brands/nakd_brand.png";
import brand6 from "../../assets/images/brands/mcgregor_brand.png";
import brand7 from "../../assets/images/brands/vanessa_wu_brand.jpg";
import brand8 from "../../assets/images/brands/fantasy_sandals_brand.jpg";

function Brands() {
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
                        <img src={brand1}/>
                        <span>GANT</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand2}/>
                        <span>Happy Socks</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand6}/>
                        <span>McGregor</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand4}/>
                        <span>Guess</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand5}/>
                        <span>NA-KD</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand3}/>
                        <span>Joop</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand7}/>
                        <span>Vanessa Wu</span>
                    </div>
                    <div className="brands-tiles__item">
                        <img src={brand8}/>
                        <span>Fantasy Sandals</span>
                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Brands;
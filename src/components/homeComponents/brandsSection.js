import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ph_square from "../../assets/images/placeholder-square.png";
function Brands() {
    return (
        <div>
            <Grid fluid className="brands-container">
                <Row className="brands-heading">
                    <Col xs={12} md={12} className="brands-heading__container">
                        <h2 className="d-flex justify-content-center">Brands</h2>
                    </Col>
                </Row>

                <Row className="brands-tiles">
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                    <Col xs={2} md={2} className="brands-tiles__item">
                        <img src={ph_square}/>
                        <span>Brand Name</span>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Brands;
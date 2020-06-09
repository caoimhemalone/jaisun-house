import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function Brands() {
    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center">Brands</h2>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Brands;
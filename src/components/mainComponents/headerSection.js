import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function Header() {
    return (
        <section className="header">
            <Grid fluid className="header-container">
                <Row>
                    <Col xs={12} md={12}>
                        <h1 className="d-flex justify-content-center">Header</h1>
                    </Col>
                </Row>
            </Grid>
        </section>
    );
}

export default Header;
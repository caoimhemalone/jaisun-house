import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function Footer() {
    return (
        <footer>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={2} className="footer-left">
                        Footer
                    </Col>
                    <Col xs={12} md={10} className="footer-right">
                        <Row end="xs" middle="xs">
                            <Col xs={12} md className="footer-item">About</Col>
                            <Col xs={12} md className="footer-item">Brands</Col>
                            <Col xs={12} md className="footer-item">B2B</Col>
                            <Col xs={12} md className="footer-item">Schedule</Col>
                            <Col xs={12} md className="footer-item">Contact</Col>
                            <Col xs={12} md className="footer-item">Sign In</Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </footer>
    );
}

export default Footer;
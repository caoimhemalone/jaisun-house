import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function Footer() {
    return (
        <footer>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={2} className="footer-left">
                        Jaisun House Logo
                    </Col>
                    <Col xs={12} md={10} className="footer-right">
                        <Row>
                            <Col xs={6} md={4} className="footer-logo">
                                Footer House Logo
                            </Col>
                            <Col xs={6} md={4} >
                                <ul>
                                    <li>
                                        <a href="/about-us">
                                            <Link to="/about-us">About Us</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/brands">
                                            <Link to="/brands">Brands</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/b2b">
                                            <Link to="/b2b">B2B</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/schedule">
                                            <Link to="/schedule">Schedule</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact">
                                            <Link to="/contact">Contact</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/sign-in">
                                            <Link to="/sign-in">Sign In</Link>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="/about-us">
                                            <Link to="/about-us">Sitemap</Link>
                                        </a>
                                    </li> */}
                                </ul>
                            </Col>
                            <Col xs={6} md={4} >
                                <ul>
                                    <li>
                                        <a href="/">
                                            <Link to="/">Social Media</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <Link to="/">Social Media</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <Link to="/">Social Media</Link>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs={6} md={4} >
                                <ul>
                                    <li>
                                        <a href="/">
                                            <Link to="/">Phone</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <Link to="/">Email</Link>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </footer>
    );
}

export default Footer;
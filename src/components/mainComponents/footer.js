import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//images
import Logo from '../../assets/images/logos/logo_6_transparent.png';
import { resolveProjectReferencePath } from "typescript";


class Footer extends Component {
    constructor () {
      super();
      this.state = {
        ttable: [],
        isLoaded: false
      }
    }
  
    componentDidMount (){
      const contactUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/contact_us/116';
      fetch(contactUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          footer: response,
          phone: response.acf.phone,
          address: response.acf.address,
          opening_hours: response.acf.opening_hours,
          map_address: response.acf.map_address,
          email: response.acf.email,
          email_mailto: "mailto:"+response.acf.email+"?subject = Feedback&body = Message",
          isLoaded: true
        })
      })
    }
  
    render() {
        return (
            <footer>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={12} className="footer-top">
                            <Row>
                                <Col xs={6} md={4} className="footer-section">
                                    <ul>
                                        <li className="footer-logo">
                                            <a href="/">
                                                <img src={Logo} alt="logo" />
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href={this.state.map_address}>
                                                {this.state.address}
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={6} md={4} className="footer-section">
                                    <ul>
                                        <li>
                                        <ion-icon name="time-outline"></ion-icon>
                                        Opening Hours:
                                        <br/>
                                            {this.state.opening_hours}
                                        </li>
                                    </ul>
                                </Col>
                                {/* <Col xs={6} md={4} >
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
                                            <a href="/services">
                                                <Link to="/services">Services</Link>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/b2b">
                                                <Link to="/b2b">B2B</Link>
                                            </a>
                                        </li> */}
                                      {/*  <li>
                                            <a href="/schedule">
                                                <Link to="/schedule">Schedule</Link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/contact">
                                                <Link to="/contact">Contact</Link>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/sign-in">
                                                <Link to="/sign-in">Sign In</Link>
                                            </a>
                                        </li> */}
                                      {/*  <li>
                                            <a href="/sitemap">
                                                <Link to="/sitemap">Sitemap</Link>
                                            </a>
                                        </li>
                                    </ul>
                                </Col> */}
                                {/* <Col xs={6} md={4} >
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
                                </Col> */}
                                <Col xs={6} md={4} className="footer-section">
                                    <ul>
                                        <li><ion-icon name="call-outline"></ion-icon></li>
                                        <li>
                                            <a href={this.state.phone}>
                                                Phone: {this.state.phone}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.email_mailto}>
                                                Email: {this.state.email}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Social Media
                                            </a>
                                        </li>
                                        {/* <li className="footer-logo">
                                            <a href="/">
                                                <img src={Logo} alt="logo" />
                                            </a>
                                        </li> */}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <hr/>
                        <Col xs={12} md={12} className="footer-bottom">
                            <span>All stock images are from <a href="https://www.unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash.com</a></span>
                            <span>Web design and development by <a href="https://www.key-vah.com" target="_blank" rel="noopener noreferrer">key-vah web creations</a></span>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//images
import Logo from '../../assets/images/logos/logo_2.png';


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
        console.log(response);
        this.setState({
          footer: response,
          phone: response.acf.phone,
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
                                        <li>
                                            <a href="/sitemap">
                                                <Link to="/sitemap">Sitemap</Link>
                                            </a>
                                        </li>
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
                                            <a href={this.state.phone}>
                                                Phone: {this.state.phone}
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.state.email_mailto}>
                                                Email: {this.state.email}
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col>
                                    <img src={Logo} alt="logo" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;
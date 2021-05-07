import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//images
import Logo from '../../assets/images/logos/logo192.png';
import instagram_img from '../../assets/images/icons/instagram.png'
import facebook_img from '../../assets/images/icons/facebook.png'
import linkedin_img from '../../assets/images/icons/linkedin.png'
import twitter_img from '../../assets/images/icons/twitter.png'

class Footer extends Component {
    constructor () {
      super();
      this.state = {
        ttable: [],
        isLoaded: false
      }
    }
  
    componentDidMount (){
      const contactUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/contact_us/116';
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
        const { isLoaded } = this.state;
        if(isLoaded) {
            return (
                <footer>
                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={12} className="footer-top">
                                <Row>
                                    <Col xs={12} md={4} className="footer-section">
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

                                        <ul className="social-media-footer">
                                            {this.state.footer.acf.instagram ? (
                                                <li className="social-media-footer__header">Connect With Us On Social Media</li>) : null
                                            }
                                            {this.state.footer.acf.instagram ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.instagram} traget="_blank">
                                                        <img src={instagram_img} alt="instagram" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.twitter ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.twitter} traget="_blank">
                                                        <img src={twitter_img} alt="twitter" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.linkedin ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.linkedin} traget="_blank">
                                                        <img src={linkedin_img} alt="linkedin" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.facebook ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.facebook} traget="_blank">
                                                        <img src={facebook_img} alt="facebook" />
                                                    </a>
                                                </li>) : null
                                            }
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={4} className="footer-section">
                                        <ul>
                                            <li>
                                            <ion-icon name="time-outline"></ion-icon>
                                            Opening Hours:
                                            <br/>
                                                {this.state.opening_hours}
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={4} className="footer-section">
                                        <ul>
                                            <li>
                                                <a href="/about">
                                                    <Link to="/about">About</Link>
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
                                                <a href="/privacy-policy">
                                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/terms-and-conditions">
                                                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/sitemap">
                                                    <Link to="/sitemap">Sitemap</Link>
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                
                                    <Col xs={12} md={4} className="footer-section-mobile">
                                    <ul className="social-media-footer">
                                            {this.state.footer.acf.instagram ? (
                                                <li className="social-media-footer__header">Connect With Us On Social Media</li>) : null
                                            }
                                            {this.state.footer.acf.instagram ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.instagram} traget="_blank">
                                                        <img src={instagram_img} alt="instagram" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.twitter ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.twitter} traget="_blank">
                                                        <img src={twitter_img} alt="twitter" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.linkedin ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.linkedin} traget="_blank">
                                                        <img src={linkedin_img} alt="linkedin" />
                                                    </a>
                                                </li>) : null
                                            }

                                            {this.state.footer.acf.facebook ? (
                                                <li className="social-media-footer__link">
                                                    <a className="social-media" href={this.state.footer.acf.facebook} traget="_blank">
                                                        <img src={facebook_img} alt="facebook" />
                                                    </a>
                                                </li>) : null
                                            }
                                        </ul>
                                        {/*<ul>
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
                                        {/* </ul> */}
                                    </Col>
                                </Row>
                            </Col>
                            <hr/>
                            <Col xs={12} md={12} className="footer-bottom">
                                <span className="left">Registered in Ireland No. 476267</span>
                                <span className="right">All stock images are from <a href="https://www.unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash.com</a></span>
                                <br/>
                                <span className="right">Web design and development by <a href="https://www.key-vah.com" target="_blank" rel="noopener noreferrer">key-vah web creations</a></span>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            );
        } return null;
    }
}

export default Footer;
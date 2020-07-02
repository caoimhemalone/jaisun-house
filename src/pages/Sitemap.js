import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/mainComponents/headerSection';

class Sitemap extends Component {
  header = "Sitemap";
  render() {
    return (
      <div className="sitemap">
      <Header heading={this.header}/>
      <Grid fluid className="sitemap-container">
      <Row className="sitemap">
          <Col xs={12} md={6} className="sitemap-item">
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
                        <Link to="/">B2B</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/contact">
                        <Link to="/contact">Contact</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/">
                        <Link to="/">Home</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/individual-brand">
                        <Link to="/individual-brand">Individual Brand</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/schedule">
                        <Link to="/schedule">Schedule</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/sign-in">
                        <Link to="/sign-in">Sign In</Link>
                    </a>
                 </li>
             </ul>
          </Col>
      </Row>
  </Grid>
  </div>
    );  
  }
}

export default Sitemap;
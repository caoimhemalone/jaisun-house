import React, { Component } from "react";
import { BrowserRouter as Link} from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

//components
import Header from '../components/mainComponents/headerSection';

class Sitemap extends Component {
    constructor(){
        super();
        this.state = {
            brands: [],
            isLoaded: false
        }
    }
  
     componentDidMount(){
        const brandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand?per_page=100';
    
        fetch(brandUrl)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          //response.sort((a, b) => a.id - b.id);
          response.sort((a, b) => parseFloat(a.acf['order_no']) - parseFloat(b.acf['order_no']));
          this.setState({
            brands: response,
            isLoaded: true
          })
        })
     }
  header = "Sitemap";
  render() {
    const brandsInfo = this.state.brands;
    console.log(brandsInfo);
    const brandLoop = brandsInfo.map((brand, index)=> {
        return (
            <li key={index}>
                <a href={brand.slug}>
                    <Link to={brand.slug}>{brand.title.rendered}</Link>
                </a>
            </li>
        )
    })
    return (
      <div className="sitemap">
      <Header heading={this.header}/>
      <Grid fluid className="sitemap-container">
      <Row className="sitemap">
          <Col xs={12} md={6} className="sitemap-item">
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
                    <a href="/contact">
                        <Link to="/contact">Contact</Link>
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
                    <a href="/privacy-policy">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </a>
                 </li>
                 <li>
                    <a href="/terms-and-conditions">
                        <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    </a>
                 </li>
             </ul>
          </Col>
          <Col xs={12} md={6}>
            <ul>
                 {brandLoop}
            </ul>
          </Col>
      </Row>
  </Grid>
  </div>
    );  
  }
}

export default Sitemap;
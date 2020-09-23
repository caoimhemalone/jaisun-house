import React, { Component } from "react";

//components
import BrandItems from '../components/brandComponents/brandItem';
import Header from '../components/mainComponents/headerSection';

class Brands extends Component {
  constructor () {
    super();
    this.state = {
      brands: [],
      isLoaded: false
    }
  }

  componentDidMount (){

    const brandUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand';

    fetch(brandUrl)
    .then(response => response.json())
    .then(response => {
      response.sort((a, b) => a.id - b.id);
      this.setState({
        brands: response,
        isLoaded: true
      })
    })


    const brandPageUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/brands_page/';

    fetch(brandPageUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        brand_page: response[0],
        header_color: response[0].acf.header_colour,
        isLoaded: true
      })
    })
  }
  header = "Brands"; 

  render() {
    return (
      <div className="brands">
        <div className="brands-items">
          <Header heading={this.header} color={this.state.header_color} />
          <BrandItems brands={this.state.brands} isLoaded={this.state.isLoaded} />
        </div>
      </div>
    );
  }
}

export default Brands;
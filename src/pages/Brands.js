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
      // response.sort((a, b) => a.id - b.id);
      response.sort((a, b) => parseFloat(a.acf['order_no']) - parseFloat(b.acf['order_no']));
      this.setState({
        brands: response,
        isLoaded: true
      })
    })
  }
  header = "Brands"; 

  render() {
    return (
      <div className="brands">
        <div className="brands-items">
          <Header heading={this.header} />
          <BrandItems brands={this.state.brands} isLoaded={this.state.isLoaded} />
        </div>
      </div>
    );
  }
}

export default Brands;
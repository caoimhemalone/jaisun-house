import React, { Component } from "react";
import {Helmet} from "react-helmet";

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

    const brandUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand?per_page=100';

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
        <Helmet>
          <title>Jaisun House | Brands</title>
          <meta name="description" content="Jaisun House - Representing the International Fashion Brands in Ireland" />
          <meta name="theme-color" content="#F7882F" />
        </Helmet>
        <div className="brands-items">
          <Header heading={this.header} />
          <BrandItems brands={this.state.brands} isLoaded={this.state.isLoaded} />
        </div>
      </div>
    );
  }
}

export default Brands;
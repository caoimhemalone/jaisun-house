import React, { Component } from "react";
import axios from 'axios';

//components
import Header from '../components/mainComponents/headerSection';
import BrandItems from '../components/indBrandComponents/brandItem';

//images
import guess1 from '../assets/images/brands/photoshoots/guess_1.jpeg';


class IndBrand extends Component {
    state = {
        brands: [],
        isLoaded: false
    }
  componentDidMount () {
    axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/individual_brand/')
        .then(res => this.setState({
            brands: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }
    
    render() {
        const {brands, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div className="ind-brands" style={{backgroundImage: 'url(' + guess1 + ')'}}>
                    <div className="overlay">
                    {brands.map(brand =><BrandItems key={brand.id} brand={brand}/>)}
                    </div>
                </div>
            );
        } return null;
    }
}

export default IndBrand;
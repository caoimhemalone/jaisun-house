import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';


class Brands extends React.Component {
    constructor(){
        super();
        this.state = {
            brands: [],
            isLoaded: false
        }
    }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
        .then(res => this.setState({
           brandtable: res.data,
           isLoaded: true
        }))
        .catch(err => console.log(err));
     }

    
      componentDidMount (){
    
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
  
    render() {
        const { isLoaded } = this.state;
        const brandsInfo = this.state.brands.slice(0, 8);
        const brandLoop = brandsInfo.map((brand, index)=> {
            return (
                <a href={brand.slug} className="brands-tiles__item" key={index}>
                    <img src={brand.acf.tile_image} alt={brand.title.rendered}/>
                    <span>
                        {brand.title.rendered}
                    </span>
                </a>      
            )
        })

        if(isLoaded) {
            return (
                <div>
                    <Grid fluid className="brands-container">
                        <Row className="brands-heading heading">
                            <Col xs={12} md={12} className="brands-heading__container">
                                <h2 className="d-flex justify-content-center">Brands</h2>
                            </Col>
                        </Row>

                        <div className="brands-tiles">
                           {brandLoop}
                        </div>
                    </Grid>
                </div>
            );
        } return null;
    }
}

export default Brands;
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContentLoader from 'react-content-loader'

export class BrandItems extends Component {
    render() {
        const MyLoader = () => (
            <ContentLoader
              height={240}
              speed={1.5}
              backgroundColor={'#fff'}
              foregroundColor={'#999'}
              viewBox="0 0 380 70"
            >
              {/* Only SVG shapes */}
              <rect x="0" y="0" rx="5" ry="5" width="70" height="170" />
            </ContentLoader>
          )
        let brands = this.props.brands
        let isLoaded = this.props.isLoaded;

        let brandLoop = brands.map((brand, index)=> {
            let imgUrl = brand.acf.tile_image;
            // let link = 'brands/'+brand.id
            //let link = brand.id
            let link = brand.slug
            return (
                <Col xs={6} md={3} className="brands__tiles-item" key={index}>
                    <a href={link}>
                        <img src={imgUrl} alt={brand.title.rendered}/>
                        <span className="d-flex justify-content-center">
                            {brand.title.rendered}
                        </span>
                    </a>       
                </Col>
            )
        })

        if(isLoaded) {
            return (       
                <Grid fluid className="brands-container px-0">
                    <Row className="brands__tiles">
                        {brandLoop}
                    </Row>
                </Grid>
            );
        } 
        return (
            <Grid fluid className="brands-container px-0">
                <Row className="brands__tiles">
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                </Row>
                <Row className="brands__tiles">
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                </Row>
                <Row className="brands__tiles">
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                    <Col xs={6} md={3} >
                        <MyLoader/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
export default BrandItems
import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeaderCarousel from "../homeComponents/carousel";

class Header extends Component {
    render(){
        const isSlider  = this.props.isSlider;
        let slider;
        if (isSlider) {
            slider =  <HeaderCarousel />;
        }

        return (
            <section className="header">
                <Grid fluid className="header-container">
                    <Row>
                        <Col xs={12} md={12} className="header-item d-flex">
                            <h1 className="d-flex justify-content-center">{this.props.heading}</h1>
                            {slider}
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Header;
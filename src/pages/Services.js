import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';

//components
import Header from '../components/mainComponents/headerSection';

class Services extends Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/services/')
        .then(res => {
            //console.log(res.data);
            this.setState({
                servicestable: res.data,
                service_heading: res.data[0].acf.intro_heading,
                service_intro: res.data[0].acf.intro_text,
                service_1: res.data[0].acf.service_1,
                service_1_info: res.data[0].acf.service_1_info,
                service_2: res.data[0].acf.service_2,
                service_2_info: res.data[0].acf.service_2_info,
                service_3: res.data[0].acf.service_3,
                service_3_info: res.data[0].acf.service_3_info,
                isLoaded: true
            })
        })
        .catch(err => console.log(err));
     }
  
     constructor(props) {    
      super(props)
      this.state = {
        condition: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      this.setState({
        condition: !this.state.condition
      })
    }
    header = "Services";
  render() {
    return (
      <div className="services">
          <Header heading={this.header}/>
        <Grid>
            {/* <Row className="services__intro px-5">
                <h2>{this.state.service_heading}</h2>
                <p>{this.state.service_intro}</p>
            </Row> */}
            
            <Row className="services__container">
                <Col xs={12} md={12} className="service-item">
                    <Col xs={12} md={3} className="service-left align-center">
                        <Zoom>
                            <ion-icon className="align-center" name="bulb-outline"></ion-icon>
                            <span className="align-center">
                                {this.state.service_1}
                            </span>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={9} className="service-right">
                        <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_1_info }}></div>
                    </Col>
                </Col>
                <Col xs={12} md={12} className="service-item">
                    <Col xs={12} md={3} className="service-left align-center">
                        <Zoom>
                            <ion-icon className="align-center" name="cash-outline"></ion-icon>
                            <span className="align-center">
                                {this.state.service_2}
                            </span>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={9} className="service-right">
                        <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_2_info }}></div>
                    </Col>
                </Col>
                <Col xs={12} md={12} className="service-item">
                    <Col xs={12} md={3} className="service-left align-center">
                        <Zoom>
                            <ion-icon className="align-center" name="star-outline"></ion-icon>
                            <span className="align-center">
                                {this.state.service_3}
                            </span>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={9} className="service-right">
                        <div className="justify-content-center about-us__services-text" dangerouslySetInnerHTML={{ __html: this.state.service_3_info }}></div>
                    </Col>
                </Col>
                <hr/>
            </Row>
        </Grid>
      </div>
    );  
  }
}

export default Services;
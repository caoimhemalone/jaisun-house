import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';
import {Helmet} from "react-helmet";

//components
import Header from '../components/mainComponents/headerSection';

class PrivacyPolicy extends Component {
  constructor(){
    super();
    this.state = {
        legal: [],
        isLoaded: false
    }
}

  componentDidMount() {
  const contactUrl = 'https://www.jaisunhouse.com/wp/wp-json/wp/v2/legal_pages/311';
  fetch(contactUrl)
  .then(response => response.json())
  .then(response => {
    this.setState({
        legal: response,
        isLoaded: true
      })
    })
  }

  header = "Privacy Policy";
  render() {
    const { isLoaded } = this.state;
    if(isLoaded) {
        return (
            <div className="legal-pages">
              <Helmet>
                  <title>Jaisun House | Privacy Policy</title>
                  <meta name="description" content="Jaisun House - Representing the International Fashion Brands in Ireland" />
                  <meta name="theme-color" content="#F7882F" />
              </Helmet>
                <Header heading={this.header}/>
                <Grid fluid className="legal-container">
                    <Row>
                        <Col xs={12} md={12}>
                            <div className="legal-date">
                                Last Updated: <span dangerouslySetInnerHTML={{ __html:this.state.legal.acf.last_updated}}></span>
                            </div>
                            <div className="legal-text" dangerouslySetInnerHTML={{ __html:this.state.legal.acf.main_text}}></div>
                        </Col>
                    </Row>
            
                </Grid>
            
            </div>
        );
    } return null;
  }
}

export default PrivacyPolicy;
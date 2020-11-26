import React, { Component } from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Pulse from 'react-reveal/Pulse';
import axios from 'axios';


//components
import Header from '../components/mainComponents/headerSection';

class Terms extends Component {
  constructor(){
    super();
    this.state = {
        legal: [],
        isLoaded: false
    }
}

  componentDidMount() {
  const contactUrl = 'http://www.jaisunhouse.com/wp/wp-json/wp/v2/legal_pages/310';
  fetch(contactUrl)
  .then(response => response.json())
  .then(response => {
    this.setState({
        legal: response,
        isLoaded: true
      })
    })
  }

  header = "Terms and Conditions";
  render() {
    const { isLoaded } = this.state;
    if(isLoaded) {
        return (
            <div className="legal-pages">
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

export default Terms;
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';

import ph_square from "../../assets/images/placeholder-square.png";

class History extends React.Component {
    state = {
        ttable: {},
        isLoaded: false
     }
  
     componentDidMount(){
        axios.get('http://www.jaisunhouse.com/wp/wp-json/wp/v2/home/')
        .then(res => this.setState({
           historytable: res.data,
           isLoaded: true
        }))
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
  
    render() {
        const {historytable, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                    <Grid fluid className="history-container">
                        <Row className="history-heading">
                            <Col xs={12} md={12}>
                                <h2 className="d-flex justify-content-center">History</h2>
                            </Col>
                        </Row>

                        <Row className="history-info">
                            <Col xs={12} md={5}>
                                <img src={ph_square} alt="Placeholder Image"/>
                            </Col>
                            <Col xs={12} md={7} className="text-container">
                                <p>{historytable.map(home_history => (
                                    <div key={home_history.id} dangerouslySetInnerHTML={{ __html:home_history.acf.history}}/>
                                ))}</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            );
        } return null;
    }
}

export default History;
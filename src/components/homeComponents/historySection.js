import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import ph_square from "../../assets/images/placeholder-square.png";

function History() {
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default History;
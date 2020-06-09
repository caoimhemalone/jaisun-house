import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function History() {
    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <h2 className="d-flex justify-content-center">History</h2>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default History;
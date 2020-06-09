import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

//import heroOne from './heroImages/hero_1.png';

function Appointment() {
    return (
        <div>
            <Row>
                <Col xs={12} md={12}>
                    <h2 className="d-flex justify-content-center">Appointment</h2>
                </Col>
            </Row>
        </div>
    );
}

export default Appointment;
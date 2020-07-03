import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";
import Pulse from 'react-reveal/Pulse';

//import heroOne from './heroImages/hero_1.png';

function Appointment() {
    return (
        <div className="appointment">
            <div className="appointment-container">
                <Pulse delay="105">
                    <div className="btn-container">
                        <Link to="/contact">
                            <a href="/contact" className="d-flex justify-content-center appt-link">Make an Appointment</a>
                        </Link>
                    </div>
                </Pulse>
            </div>
        </div>
    );
}

export default Appointment;
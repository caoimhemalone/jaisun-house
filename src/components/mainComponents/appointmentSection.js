import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";

//import heroOne from './heroImages/hero_1.png';

function Appointment() {
    return (
        <div className="appointment">
            <div className="appointment-container">
                <Link to="/contact">
                    <a href="/contact" className="d-flex justify-content-center appt-link">Make an Appointment</a>
                </Link>
            </div>
        </div>
    );
}

export default Appointment;
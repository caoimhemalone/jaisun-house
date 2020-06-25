import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Link} from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome-container">
            <div className="title-container">
                <div className="title-seperator title-seperator-container-left">
                    <div className="title-sep"></div>
                </div>
                <h2>Welcome to Jaisun House</h2>
                <div className="title-seperator title-seperator-container-right">
                    <div className="title-sep"></div>
                </div>
            </div>

            <div className="welcome-text">
                <p>Welcome to Jaisun House, a leading distributor in high end fashion.  With collections stocked in retail stores throughout Ireland Jaisun House have a strong history and reputation for their offering within the high end fashion business.</p>
            </div>
        </div>
    );
}

export default Welcome;
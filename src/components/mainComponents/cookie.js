import React, { Component } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

class Cookie extends Component {
    render() {
        return (
            <section className="cookie-message">
                <div className="cookie-container">
                <CookieConsent
                location="bottom"
                buttonText="okay"
                cookieName="cookies-consent"
                style={{ background: "#fff", color: '#6B7A8F' }}
                buttonStyle={{ background: "#F7C331", fontSize: "13px", padding: "10px 15px" }}
                expires={150}
                >This website uses cookies to enhance the user experience.</CookieConsent>
                </div>
            </section>
        );
    }
} 

export default Cookie;
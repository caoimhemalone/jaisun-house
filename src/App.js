//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component, useRef } from "react";
import $ from 'jquery';
import TopLoader from 'react-top-loader';

//components
import Nav from './components/mainComponents/nav';
import Footer from './components/mainComponents/footer';
import Cookie from './components/mainComponents/cookie';


//includes
import './assets/css/main.css';

//images
import Logo from './assets/images/logos/logo192.png';

$(document).ready(function(){
  setTimeout(function(){
    $('#loader').css('display', 'none');
  }, 2800);
});


class App extends Component {
  render() {
    return (
      <div>
        <div className="loader-container" id="loader">
          <div className="loader">
            <TopLoader backgroundColor="#C0C5CB" show fixed={false} color="#F7882F" duration={800}/>
          </div>
        </div>

        <div className="mobile-logo">
          <a href="/">
              <img src={Logo} alt="logo"/>
          </a>
        </div>
        <Nav />
        <Footer />
        <Cookie />
      </div>
    );
  }
}

export default App;
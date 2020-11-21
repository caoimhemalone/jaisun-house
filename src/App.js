//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";

//components
import Nav from './components/mainComponents/nav';
import Footer from './components/mainComponents/footer';
import Cookie from './components/mainComponents/cookie';


//includes
import './assets/css/main.css';

//images
import Logo from './assets/images/logos/logo_6_transparent.png';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    return (
      <div>
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

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
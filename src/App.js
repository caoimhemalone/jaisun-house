//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";

//components
import Nav from './components/mainComponents/nav';
// import Home from './pages/Home';
// import About from './pages/About';
// import Brands from './pages/Brands';
// import B2B from './pages/B2B';
// import Schedule from './pages/Schedule';
// import Contact from './pages/Contact';
// import Signin from './pages/Signin';

import Footer from './components/mainComponents/footer';

//images
// import logo from './logo.svg';

//includes
import './assets/css/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    );  
  }
}

export default App;
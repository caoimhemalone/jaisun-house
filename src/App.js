//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";

//components
import Nav from './components/mainComponents/nav';

import Footer from './components/mainComponents/footer';


//includes
import './assets/css/main.css';

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
    
    if(loading) {
      //return null; // render null when app is not ready
      const hide = 1
    }

    const hide = 0
    
    return (
      <div style={{opacity: hide}}>
        <Nav />
        <Footer />
      </div>
    ); 
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";


//components
import Header from '../components/mainComponents/headerSection';
import Brands from '../components/homeComponents/brandsSection';
import Welcome from '../components/homeComponents/welcomeSection';
import History from '../components/homeComponents/historySection';
import Appointment from '../components/mainComponents/appointmentSection';


class Home extends Component {
  header = "Jaisun House";
  slider = true;
  
  render() {
    return (
      <div className="home-page">
        <Header heading={this.header} isSlider={this.slider}/>
        <Welcome />
        <Brands />
        <Appointment />
        <History />
      </div>
    );  
  }
}

export default Home;
//Flexbox guide https://roylee0704.github.io/react-flexbox-grid/
import React, { Component } from "react";


//components
import Header from '../components/mainComponents/headerSection';
import Brands from '../components/homeComponents/brandsSection';
import History from '../components/homeComponents/historySection';
import Appointment from '../components/mainComponents/appointmentSection';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Brands />
        <History />
        <Appointment />
      </div>
    );  
  }
}

export default Home;
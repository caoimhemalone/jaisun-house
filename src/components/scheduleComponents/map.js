import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GMap extends Component {


  render() {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    return (
      <div className="g-map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 48.00, lng: -122.00}}
        >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyB66NxSGTeJiHOGThgugVYu374crWUQi5s'
  })(GMap);
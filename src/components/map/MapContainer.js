import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

// const divImageStyle = {
//   float:left
// };

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
  // onMapClicked = () => {
  //   if (this.state.showingInfoWindow)
  //     this.setState({
  //        activeMarker: null,
  //       showingInfoWindow: false
  //      });
  //     };
    }
  };

  render() {
    return (
      <CurrentLocation
        // className="map"
        centerAroundCurrentLocation
        google={this.props.google}
        // onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick} name= {'Current Location.'}/>

        {/* <Marker {this.state.markerArray.map(marker => (
            <Marker 
            position={marker.location}
            />
          ))}/> */}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
          {/* <div {divImageStyle}><img src='http://i.stack.imgur.com/g672i.png'></div><div style='float:right; padding: 10px;'><b>Title</b><br/>123 Address<br/> City,Country</div> */}
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        {/* <InfoWindow visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow> */}
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY_YT)
})(MapContainer);


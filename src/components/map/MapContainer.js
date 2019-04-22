import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

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

  onClose = props => {
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
        className="map"
        centerAroundCurrentLocation
        google={this.props.google}
        // onClick={this.onMapClicked}
      >
        <Marker
          onClick={this.onMarkerClick} name="Current Location."
        />
        {/* {this.state.markerArray.map(marker => (
            <Marker 
            position={marker.location}
            />
          ))} */}
        <Marker />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY_YT)
})(MapContainer);


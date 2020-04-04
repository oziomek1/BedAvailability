import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class HospitalMap extends Component {
    state = {
        lat: 55.730952,
        lng: 12.44357,
        zoom: 9,
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br/> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        );
    }
 }

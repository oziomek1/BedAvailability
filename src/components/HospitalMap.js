import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";


export default class HospitalMap extends Component {
    state = {
        lat: 55.730952,
        lng: 12.44357,
        zoom: 9,
    }
    render() {
        return (
            <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </Map>
        )
    }
 }

import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as hospitalLocations from "../data/hospital-locations.json";


export default class HospitalMap extends Component {
    constructor() {
        super();
        this.state = {
            lat: 55.6761,
            lng: 12.5683,
            zoom: 11,
            activeHospital: null,
        };
    }

    setActiveHospital(hospital) {
        this.setState({
            activeHospital: hospital,
        });
    }
    render() {
        return (
            <Map center={[this.state.lat, this.state.lng]} zoom={this.state.zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {hospitalLocations.hospitals.map((hospital, index) => (
                    <Marker 
                        key={index} 
                        position={[hospital.geometry.coordinates.latitude, hospital.geometry.coordinates.longitude]}
                        onclick={() => {
                            this.setActiveHospital(hospital);
                        }}
                    >
                        {this.state.activeHospital &&
                            (<Popup
                                position={[
                                    this.state.activeHospital.geometry.coordinates.latitude, 
                                    this.state.activeHospital.geometry.coordinates.longitude
                                ]}
                            >
                                <div>
                                    <h2>{this.state.activeHospital.name}</h2>
                                    <p>{this.state.activeHospital.contact.address}</p>
                                    <p>{this.state.activeHospital.contact.telephone}</p>
                                </div>
                            </Popup>)
                        }
                    </Marker>
                ))}

                
            </Map>
        )
    }
 }

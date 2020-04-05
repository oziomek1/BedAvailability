import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const hospitalIcon = new Icon({
    iconUrl: "https://image.flaticon.com/icons/svg/69/69658.svg",
    iconSize: [25, 25]
});

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
                {this.props.locations.default.hospitals.map((hospital, index) => (
                    <Marker 
                        key={index} 
                        position={[hospital.geometry.coordinates.latitude, hospital.geometry.coordinates.longitude]}
                        onclick={() => {
                            this.setActiveHospital(hospital);
                        }}
                        icon={hospitalIcon}
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
                                    <p>
                                        <strong>Address:</strong><br/>
                                        {this.state.activeHospital.contact.address}
                                    </p>
                                    <p>
                                        <strong>Telephone:</strong><br/>
                                        {this.state.activeHospital.contact.telephone}
                                    </p>
                                </div>
                            </Popup>)
                        }
                    </Marker>
                ))}

                
            </Map>
        )
    }
 }
import React, { Component } from 'react';
import HospitalMap from './components/HospitalMap';
import * as hospitalLocations from "./data/hospital-locations.json";
import './App.css';

class App extends Component {
  state = {
    locations: hospitalLocations,
  }
  render() {
    return (
      <div class='app-background'>
        <h1>Bed Availability</h1>
        <HospitalMap locations={this.state.locations}></HospitalMap>
      </div>
    );
  }
}

export default App;
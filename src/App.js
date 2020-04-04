import React, { Component } from 'react';
import HospitalMap from './components/HospitalMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class='app-background'>
        <h1>Bed Availability</h1>
        <HospitalMap></HospitalMap>
      </div>
    );
  }
}

export default App;
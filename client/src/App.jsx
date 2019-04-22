import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './Components/info.jsx'

const techCompanies = [
  { label: "Japanese", value: 1 },
  { label: "BlackWork", value: 2 },
  { label: "OldSchool", value: 3 },
  { label: "Tribal", value: 4 },

];


const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <h1>Ink Place </h1>
        <Select options={ techCompanies } />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;

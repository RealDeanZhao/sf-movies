import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

class App extends Component {

  static defaultProps = {
    center: { lat: 37.77, lng: -122.41 },
    zoom: 13
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className={'App'}>
        <div className={'main'}>
          <Map></Map>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;

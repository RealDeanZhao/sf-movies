import React, { Component } from 'react';
import './App.css';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Sidebar from './Sidebar/Sidebar.js';

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
          <GoogleMap
            bootstrapURLKeys={{ key: 'AIzaSyAIp1gbo-KDCOkvms-ezubPN4Ao1BJCQkg' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
          </GoogleMap>
        </div>
        <div className={'sidebar'}>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;

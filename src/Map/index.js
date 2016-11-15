import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import './styles.css';
import MapMarker from './MapMarker';

class Map extends Component {

    static defaultProps = {
        // coordindate of HAIGHT ASHBURY
        center: { lat: 37.770015, lng: -122.446937 },
        zoom: 11
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const {movies} = this.props;
        const markerList = movies.list.map(function (movie) {
            console.log(movie);
            return (
                <MapMarker key={movie.id} lat={movie.lat} lng={movie.lng} text='A' ></MapMarker>
            )
        }, this);
        return (
            <div className='map'>
                <GoogleMap
                    bootstrapURLKeys={{ key: 'AIzaSyAIp1gbo-KDCOkvms-ezubPN4Ao1BJCQkg' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                    {markerList}
                </GoogleMap>
            </div>
        );
    }
}

export default Map;

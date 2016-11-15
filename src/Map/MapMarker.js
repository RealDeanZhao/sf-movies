import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import './styles.css';

export default class MapMarker extends Component {
    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className='map-marker'>
                {this.props.text}
            </div>
        );
    }
}
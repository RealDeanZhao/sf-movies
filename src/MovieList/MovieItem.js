import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

class MovieItem extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div>
                <div className='list-group-item'>
                    <h4>{'Media heading'}</h4>
                    {'asdfasdfasdf'}
                </div>
            </div>
        );
    }
}

export default MovieItem;

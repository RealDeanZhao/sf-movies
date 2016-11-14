import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieItem from './MovieItem';

class MovieList extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div>
                <div className='list-group'>
                    <MovieItem> </MovieItem>
                </div>
            </div>
        );
    }
}

export default MovieList;

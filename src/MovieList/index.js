import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieItem from './MovieItem';
import './styles.css';

class MovieList extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className='movie-list' >
                <div className='list-group'>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                    <MovieItem> </MovieItem>
                </div>
            </div >
        );
    }
}

export default MovieList;

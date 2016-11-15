import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieItem from './MovieItem';
import './styles.css';

class MovieList extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;
    
    render() {
        const {movies} = this.props;
        const movieList = movies.list.map(function (movie) {
            return (
                <MovieItem key={movie.id} movie={movie}></MovieItem>
            )
        }, this);
        return (
            <div className='movie-list' >
                <div className='list-group'>
                    {movieList}
                </div>
            </div >
        );
    }
}

export default MovieList;

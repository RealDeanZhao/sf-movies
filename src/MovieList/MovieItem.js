import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

class MovieItem extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const {movie} = this.props;
        return (
            <div>
                <div className='list-group-item'>
                    <h4>{movie.title}</h4>
                    <div><strong>{'Location: '}</strong>{movie.locations}</div>
                    <div><strong>{'Release Year : '}</strong>{movie.release_year}</div>
                    <div><strong>{'Actors : '}</strong>{movie.actor_1 + ', ' + movie.actor_2 + ', ' + movie.actor_3}</div>
                    <div><strong>{'Director : '}</strong>{movie.director}</div>
                </div>
            </div>
        );
    }
}

export default MovieItem;

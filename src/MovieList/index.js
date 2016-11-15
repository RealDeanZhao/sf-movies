import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import MovieItem from './MovieItem';
import './styles.css';
import { _load } from '../redux/modules/movies';

class MovieList extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(_load());
    };
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

const mapStateToProps = (state, ownProps) => ({
    movies: state.movies
});

export default connect(mapStateToProps)(MovieList);

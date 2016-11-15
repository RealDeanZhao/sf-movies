import React, { Component } from 'react';
import './styles.css';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieList from '../MovieList';

class Sidebar extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        const {movies} = this.props;
        return (
            <div className='sidebar'>
                <div className='searchbox'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Search for the movie by the title' />
                        <span className='input-group-btn'>
                            <button className='btn btn-default' type='button'>Search!</button>
                        </span>
                    </div>
                </div>
                <div>
                    <MovieList movies={movies}></MovieList>
                </div>
            </div>
        );
    }
}

export default Sidebar;

import React, { Component } from 'react';
import './Sidebar.css';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieList from '../Movie/MovieList';

class Sidebar extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Search for the movie title' />
                    <span className='input-group-btn'>
                        <button className='btn btn-default' type='button'>Search!</button>
                    </span>
                </div>
                <div>
                    <MovieList></MovieList>
                </div>
            </div>
        );
    }
}

export default Sidebar;

import React, { Component } from 'react';
import './styles.css';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MovieList from '../Movie/MovieList';

class Searchbox extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className='searchbox'>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Search for the movie by the title' />
                    <span className='input-group-btn'>
                        <button className='btn btn-default' type='button'>Search!</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Searchbox;

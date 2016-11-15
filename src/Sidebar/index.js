import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import './styles.css';
import MovieList from '../MovieList';
import Searchbox from '../Searchbox';
import {_load} from '../redux/modules/movies';

class Sidebar extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    handleSubmit = (values) => {
        const query = {
            limit: 10,
            page: 1,
            title: values.title
        }
        const {dispatch} = this.props;
        dispatch(_load(query));
        console.log(values);
    }

    render() {
        const {movies} = this.props;
        return (
            <div className='sidebar'>
                <div>
                    <Searchbox onSubmit={this.handleSubmit}></Searchbox>
                </div>
                <div>
                    <MovieList movies={movies}></MovieList>
                </div>
            </div>
        );
    }
}

export default connect()(Sidebar);

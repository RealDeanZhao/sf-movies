import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import './styles.css';
import { _load } from '../redux/modules/movies';
import { setQuery } from '../redux/modules/search';

class AutoCompeleteInput extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;

    handleClick = () => {
        const {dispatch, search} = this.props;
        const query = {
            limit: 10,
            page: 1,
            title: search.title ? search.title : ''
        }
        dispatch(setQuery(query));
        dispatch(_load(query));
    }

    render() {
        const {inputProps, done} = this.props;
        return (
            <div className='input-group'>
                <input {...inputProps} />
                <span className='input-group-btn'>
                    <button className='btn btn-default' onClick={this.handleClick} disabled={!done}>Search</button>
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    search: state.search,
    done: state.movies.done
});

export default connect(mapStateToProps)(AutoCompeleteInput);

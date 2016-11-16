import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

import './styles.css';
import { _load } from '../redux/modules/suggestions';
import { setQuery } from '../redux/modules/search';
import { filterSuggestions } from '../redux/modules/suggestions';
import { clearSuggestions } from '../redux/modules/suggestions';
import AutoCompleteInput from './AutoCompleteInput';

const renderSuggestion = suggestion => (
    <span>{suggestion.title}</span>
);

const getSuggestionValue = suggestion => suggestion.title;

class Searchbox extends Component {
    shouldComponentUpdate = shouldPureComponentUpdate;

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(_load());
    }

    onChange = (event, { newValue }) => {
        const {dispatch, search} = this.props;
        const query = {
            limit: search.limit,
            page: search.page,
            title: newValue
        }
        dispatch(setQuery(query));
    };

    onSuggestionsFetchRequested = ({ value }) => {
        const {suggestions, dispatch} = this.props;
        dispatch(filterSuggestions(value, suggestions))
    }

    onSuggestionsClearRequested = () => {
        const {dispatch} = this.props;
        dispatch(clearSuggestions())
    };

    render() {
        const {search, filteredSuggestions} = this.props;

        const inputProps = {
            placeholder: 'Search for the movies by the title.',
            value: search.title,
            onChange: this.onChange,
            className: 'form-control'
        };

        return (
            <div className='searchbox'>
                <Autosuggest
                    suggestions={filteredSuggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    renderInputComponent={(inputProps) => (<AutoCompleteInput inputProps={inputProps} />)}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    filteredSuggestions: state.suggestions.filteredList,
    suggestions: state.suggestions.list,
    search: state.search
});

export default connect(mapStateToProps)(Searchbox);

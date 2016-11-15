import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';

import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';
import { _load } from './redux/modules/movies';

class App extends Component {

  static defaultProps = {
    center: { lat: 37.77, lng: -122.41 },
    zoom: 13
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    const {dispatch} = this.props;
    var query = {
      limit: 10,
      page: 1,
      title: ''
    }
    dispatch(_load(query));
  };
  render() {
    const {movies} = this.props;
    return (
      <div className={'App'}>
        <div className={'main'}>
          <Map movies={movies}></Map>
        </div>
        <div>
          <Sidebar movies={movies} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(App);

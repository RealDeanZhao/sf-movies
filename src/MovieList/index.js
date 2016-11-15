import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import './styles.css';
import MovieItem from './MovieItem';
import { _load } from '../redux/modules/movies';
import { setQuery } from '../redux/modules/search';

class MovieList extends Component {

    shouldComponentUpdate = shouldPureComponentUpdate;
    handlePageClick = (data) => {
        let selected = data.selected;
        const {dispatch, search} = this.props;
        let query = {
            limit: search.limit,
            page: selected + 1,
            title: search.title
        }
        dispatch(setQuery(query));
        dispatch(_load(query));
        this.refs.movieList.scrollTop = 0;
    }

    render() {
        const {movies, search} = this.props;
        const movieList = movies.list.map(function (movie) {
            return (
                <MovieItem key={movie.id} movie={movie}></MovieItem>
            )
        }, this);
        return (
            <div className='movie-list' ref='movieList'>
                <div className='list-group'>
                    {movieList}
                    <div className='list-group-item'>
                        <ReactPaginate previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={<a>...</a>}
                            breakClassName={"break-me"}
                            pageNum={movies.totalPage}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            clickCallback={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                            forceSelected={search.page - 1} />
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    movies: state.movies,
    search: state.search
});

export default connect(mapStateToProps)(MovieList);

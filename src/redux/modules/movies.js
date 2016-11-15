const LOAD = 'sf-movies/movies/LOAD';
const LOAD_SUCCESS = 'sf-movies/movies/LOAD_SUCCESS';
const LOAD_FAILURE = 'sf-movies/movies/LOAD_FAILURE';

const initialState = {
    done: true,
    list: [],
    count: 0,
    totalPage: 1
}
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                done: false
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                done: true,
                list: action.result.data,
                count: action.result.count,
                totalPage: action.result.totalPage,
                error: null
            };
        case LOAD_FAILURE:
            return {
                ...state,
                done: true,
                list: []
            }
        default: return state;
    }
}

export function load() {
    return { type: LOAD }
}

export function loadSuccess(result) {
    return {
        type: LOAD_SUCCESS,
        result
    }
}

export function loadError(error) {
    return {
        type: LOAD_FAILURE,
        error
    }
}

export const _load = (query) => {
    console.log('start to load movies');
    return (dispatch) => {
        dispatch(load());
        fetch(`/api/movies?limit=${query.limit}&page=${query.page}&title=${query.title}`)
            .then(res => res.json())
            .then(json => dispatch(loadSuccess(json)))
            .catch(error => console.log(error));
    }
}

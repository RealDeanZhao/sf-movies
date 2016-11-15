const LOAD = 'sf-movies/movies/LOAD';
const LOAD_SUCCESS = 'sf-movies/movies/LOAD_SUCCESS';
const LOAD_FAILURE = 'sf-movies/movies/LOAD_FAILURE';

const initialState = {
    done: true,
    list: [],
    count: 0
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
    return (dispatch) => {
        dispatch(load());
        fetch(`/api/movies?limit=10&page=1`).then(function(res){
            return res.json();
        }).then(function(json){
            const result = json;
            dispatch(loadSuccess(result))
        });
    }
}

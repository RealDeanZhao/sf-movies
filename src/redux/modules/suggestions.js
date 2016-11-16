const LOAD = 'sf-movies/suggestions/LOAD';
const LOAD_SUCCESS = 'sf-movies/suggestions/LOAD_SUCCESS';
const LOAD_FAILURE = 'sf-movies/suggestions/LOAD_FAILURE';

const FILTER = 'sf-movies/suggestions/FILTER';
const CLEAR = 'sf-movies/suggestions/CLEAR';

const initialState = {
    done: true,
    list: [],
    filteredList: []
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
                list: action.result,
                filteredList: action.result,
                error: null
            };
        case LOAD_FAILURE:
            return {
                ...state,
                done: true,
                list: [],
                filteredList: []
            }
        case FILTER:
            return {
                ...state,
                done: true,
                filteredList: action.result
            }
        case CLEAR:
            return {
                ...state,
                done: true,
                filteredList: []
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

export const _load = () => {
    console.log('start to load suggestions');
    return (dispatch) => {
        dispatch(load());
        fetch(`/api/suggestions`)
            .then(res => res.json())
            .then(json => dispatch(loadSuccess(json)))
            .catch(error => console.log(error));
    }
}

export function filterSuggestions(value, suggestions) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const result = inputLength === 0 ? [] : suggestions.filter(suggestion =>
        suggestion.title.toLowerCase().slice(0, inputLength) === inputValue);

    return {
        type: FILTER,
        result
    };
}

export function clearSuggestions() {
    return {
        type: CLEAR
    }
}
